const express = require("express");
const mysql = require("mysql2");
const session = require("express-session");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

const corsOptions = cors({
  origin: "*",
  credentials: true,
});

app.use(corsOptions);

const server = require("http").createServer(app, {
  cors: corsOptions,
});
const io = require("socket.io")(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const sessionMiddleware = session({
  secret: "dsof82445qs*2E",
  resave: false,
  saveUninitialized: true,
});

app.use(sessionMiddleware);
io.engine.use(sessionMiddleware);

const userToSocketIdMap = {};

io.on("connection", (socket) => {
  socket.on("register user", () => {
    if (!socket.request.session.user) {
      return;
    }

    const userId = socket.request.session.user.id;
    console.log("register user", userId);
    userToSocketIdMap[String(userId)] = socket.id;
  });

  socket.on("message", (data) => {
    const { recipientId, message, isGroup } = data;
    if (!recipientId || !message || !socket.request.session.user) {
      return;
    }

    const senderId = socket.request.session.user.id;

    const senderSocketId = userToSocketIdMap[senderId];

    // get author info
    pool.query(
      "SELECT * FROM utilisateur WHERE id = ?",
      [senderId],
      (err, rows) => {
        const messageToSend = {
          id: uuid.v4(),
          content: message,
          date: Date.now(),
          auteur: {
            id: rows[0].id,
            nom: rows[0].nom,
            prenom: rows[0].prenom,
            email: rows[0].email,
            fonction: rows[0].fonction,
            id_equipe: rows[0].id_equipe,
          },
        };

        if (senderId) {
          messageToSend.isCurrentUser = true;
          io.to(senderSocketId).emit("message", messageToSend);
        }

        if (isGroup) {
          pool.query(
            "SELECT * FROM utilisateur WHERE id_equipe = ?",
            [recipientId],
            (err, rows) => {
              rows.forEach((user) => {
                if (user.id !== senderId) {
                  const recipientSocketId = userToSocketIdMap[user.id];
                  if (recipientSocketId) {
                    io.to(recipientSocketId).emit("message", messageToSend);
                  }
                }
              });
            }
          );
        } else {
          const recipientSocketId = userToSocketIdMap[recipientId];
          if (recipientSocketId) {
            io.to(recipientSocketId).emit("message", messageToSend);
          }
        }
      }
    );
  });

  socket.on("join room", (room) => {
    console.log("joined room", room);
    socket.join(room);
  });

  socket.on("leave room", (room) => {
    socket.leave(room);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "M2L",

  password: "root",
  port: 3307,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

app.get("/api", (req, res) => {
  res.send("API is up");
});

app.get("/api/user", (req, res) => {
  if (req.session.user) {
    res.send({ success: true, user: req.session.user });
  } else {
    res.send({ success: false, message: "Non connecté" });
  }
});

app.post("/api/user", (req, res) => {
  if (!req.session.user) {
    res.send({ success: false, message: "Non connecté" });
    return;
  }

  const { nom, prenom, email } = req.body;

  if (!nom || !prenom || !email) {
    res.send({ success: false, message: "Veuillez remplir tous les champs" });
    return;
  }

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    res.send({ success: false, message: "Email invalide" });
    return;
  }

  const id = req.session.user.id;

  pool.query(
    "UPDATE utilisateur SET nom = ?, prenom = ?, email = ? WHERE id = ?",
    [nom, prenom, email, id],
    (err, rows) => {
      if (err) {
        res.send({ success: false, message: err });
      } else {
        req.session.user.nom = nom;
        req.session.user.prenom = prenom;
        req.session.user.email = email;
        res.send({ success: true, message: "success" });
      }
    }
  );
});

app.post("/api/password", (req, res) => {
  if (!req.session.user) {
    res.send({ success: false, message: "Non connecté" });
    return;
  }

  const { oldPassword, password, confirm } = req.body;

  if (!oldPassword || !password || !confirm) {
    res.send({ success: false, message: "Veuillez remplir tous les champs" });
    return;
  }

  if (password.length < 8) {
    res.send({ success: false, message: "Mot de passe trop court" });
    return;
  }

  if (password !== confirm) {
    res.send({
      success: false,
      message: "Les mots de passe ne correspondent pas",
    });
    return;
  }

  const id = req.session.user.id;

  pool.query("SELECT * FROM utilisateur WHERE id = ?", [id], (err, rows) => {
    if (err) {
      res.send({ success: false, message: err });
    } else {
      bcrypt.compare(oldPassword, rows[0].mdp, (err, result) => {
        if (result) {
          bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
              res.send({ success: false, message: err });
            } else {
              pool.query(
                "UPDATE utilisateur SET mdp = ? WHERE id = ?",
                [hash, id],
                (err, rows) => {
                  if (err) {
                    res.send({ success: false, message: err });
                  } else {
                    res.send({ success: true, message: "success" });
                  }
                }
              );
            }
          });
        } else {
          res.send({ success: false, message: "Mot de passe incorrect" });
        }
      });
    }
  });
});

app.post("/api/commande", (req, res) => {
  if (!req.session.user) {
    res.send({ success: false, message: "Non connecté" });
    return;
  }

  const { produits } = req.body;

  if (!produits) {
    res.send({ success: false, message: "Veuillez remplir tous les champs" });
    return;
  }

  const id = uuid.v4();
  const date = new Date().toISOString().slice(0, 19).replace("T", " ");

  const produitsParsed = JSON.parse(produits);

  pool.query("SELECT * FROM stock", (err, rows) => {
    if (err) {
      res.send({ success: false, message: err });
    } else {
      const stock = rows;
      let allProductsExist = true;
      let total = 0;
      produitsParsed.forEach((produit) => {
        const product = stock.find((p) => p.id === produit.id);
        if (!product) {
          allProductsExist = false;
        } else {
          total += product.prix * produit.quantite;
        }
      });

      if (!allProductsExist) {
        res.send({
          success: false,
          message: "Un ou plusieurs produits n'existent pas",
        });
        return;
      }

      pool.query(
        "INSERT INTO commande (id, date, produits, id_utilisateur) VALUES (?, ?, ?, ?)",
        [id, date, produits, req.session.user.id],
        (err, rows) => {
          if (err) {
            res.send({ success: false, message: err });
          }

          res.send({ success: true, message: "success" });
        }
      );
    }
  });
});

app.get("/api/commandes", (req, res) => {
  if (!req.session.user) {
    res.send({ success: false, message: "Non connecté" });
  }

  pool.query(
    "SELECT * FROM commande WHERE id_utilisateur = ?",
    [req.session.user.id],
    (err, rows) => {
      if (err) {
        res.send({ success: false, message: err });
      }

      const commands = rows;
      pool.query("SELECT * FROM stock", (err, rows) => {
        if (err) {
          res.send({ success: false, message: err });
        }

        const stock = rows;
        const commandsWithProducts = commands.map((command) => {
          const products = JSON.parse(command.produits);
          const productsWithDetails = products.map((product) => {
            const productDetails = stock.find((p) => p.id === product.id);
            return {
              ...product,
              nom: productDetails.nom,
              prix: productDetails.prix,
              image: productDetails.image,
              description: productDetails.description,
            };
          });

          return {
            ...command,
            produits: productsWithDetails,
          };
        });

        res.send({ success: true, commands: commandsWithProducts });
      });
    }
  );
});

app.get("/api/articles", (req, res) => {
  pool.query("SELECT * FROM article", (err, rows) => {
    if (err) {
      res.send({ success: false, message: err });
    } else {
      res.send({ success: true, articles: rows });
    }
  });
});

app.get("/api/articles", (req, res) => {
  pool.query("SELECT * FROM article", (err, rows) => {
    if (err) {
      res.send({ success: false, message: err });
    } else {
      res.send({ success: true, articles: rows });
    }
  });
});

app.get("/api/produits", (req, res) => {
  pool.query("SELECT * FROM stock", (err, rows) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.send(rows.slice(0, 20));
    }
  });
});

app.delete("/api/produits/:id", (req, res) => {
  const id = req.params.id;
  pool.query("DELETE FROM stock WHERE id = ?", [id], (err, rows) => {
    if (err) {
      res.send({ success: false, message: err });
    } else {
      res.send({ success: true, message: "success" });
    }
  });
});

app.post("/api/produits", (req, res) => {
  const nom = req.body.nom;
  const quantite = req.body.quantite;
  const prix = req.body.prix;
  const description = req.body.description;
  const id = uuid.v4();
  pool.query(
    "INSERT INTO stock (nom, quantite, prix, description, id) VALUES (?, ?, ?, ?, ?)",
    [nom, quantite, prix, description, id],
    (err, rows) => {
      if (err) {
        res.send({ success: false, message: err });
      } else {
        res.send({ success: true, message: "success" });
      }
    }
  );
});

app.post("/api/produits/:id/like", (req, res) => {
  if (!req.session.user) {
    res.send({ success: false, message: "Non connecté" });
    return;
  }

  const id = req.params.id;
  pool.query(
    "SELECT * FROM likes WHERE user_id = ? AND product_id = ?",
    [req.session.user.id, id],
    (err, rows) => {
      if (err) {
        res.send({ success: false, message: err });
      } else {
        if (rows.length > 0) {
          res.send({
            success: false,
            message: "Vous avez déjà liké ce produit",
          });
        } else {
          pool.query(
            "INSERT INTO likes (user_id, product_id) VALUES (?, ?)",
            [req.session.user.id, id],
            (err, rows) => {
              if (err) {
                res.send({ success: false, message: err });
              } else {
                res.send({ success: true, message: "success" });
              }
            }
          );
        }
      }
    }
  );
});

app.post("/api/produits/:id/dislike", (req, res) => {
  if (!req.session.user) {
    res.send({ success: false, message: "Non connecté" });
    return;
  }

  const id = req.params.id;
  pool.query(
    "DELETE FROM likes WHERE user_id = ? AND product_id = ?",
    [req.session.user.id, id],
    (err, rows) => {
      if (err) {
        res.send({ success: false, message: err });
      } else {
        res.send({ success: true, message: "success" });
      }
    }
  );
});

app.get("/api/produits/:id", (req, res) => {
  const id = req.params.id;
  pool.query("SELECT * FROM stock WHERE id = ?", [id], (err, rows) => {
    if (err) {
      res.send({ success: false, message: err });
    } else {
      pool.query(
        "SELECT * FROM likes WHERE product_id = ?",
        [id],
        (err, likesRows) => {
          if (err) {
            res.send({ success: false, message: err });
          } else {
            const product = rows[0];
            const likes = likesRows.length;
            const isLikedByUser = likesRows.find(
              (like) => like.user_id === req.session.user.id
            );
            res.send({
              success: true,
              product: { ...product, likes, isLikedByUser: !!isLikedByUser },
            });
          }
        }
      );
    }
  });
});

const annonces = [
  {
    id: "123",
    nom: "annonce 1",
    contenu: "description 1",
    auteur: "Auteur",
  },
];

app.get("/api/annonces", (req, res) => {
  res.send(annonces);
});

app.post("/api/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log(email, password);

  // check all fields are filled
  if (!email || !password) {
    res.send({ success: false, message: "Veuillez remplir tous les champs" });
    return;
  }

  pool.query(
    "SELECT * FROM utilisateur WHERE email = ?",
    [email],
    (err, rows) => {
      if (err) {
        res.send({ error: err });
      } else {
        if (rows.length > 0) {
          bcrypt.compare(password, rows[0].mdp, (err, result) => {
            if (result) {
              const user = rows[0];
              req.session.user = {
                id: user.id,
                nom: user.nom,
                prenom: user.prenom,
                email: user.email,
                fonction: user.fonction,
              };
              res.send({ success: true, message: "success" });
            } else {
              res.send({
                success: false,
                message: "Mot de passe ou email incorrect",
              });
            }
          });
        } else {
          res.send({
            success: false,
            message: "Mot de passe ou email incorrect",
          });
        }
      }
    }
  );
});

app.get("/api/logout", (req, res) => {
  req.session.destroy();
  res.send({ success: true, message: "success" });
});

app.post("/api/register", (req, res) => {
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const email = req.body.email;
  const password = req.body.password;
  const confirm = req.body.confirm;

  // check all fields are filled
  if (!nom || !prenom || !email || !password || !confirm) {
    res.send({ success: false, message: "Veuillez remplir tous les champs" });
    return;
  }

  // check email is valid with regex
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    res.send({ success: false, message: "Email invalide" });
    return;
  }

  // check password length
  if (password.length < 8) {
    res.send({ success: false, message: "Mot de passe trop court" });
    return;
  }

  // check password and confirm password match
  if (password !== confirm) {
    res.send({
      success: false,
      message: "Les mots de passe ne correspondent pas",
    });
    return;
  }

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      res.send({ success: false, message: err });
    } else {
      pool.query(
        "INSERT INTO utilisateur (nom, prenom, email, mdp, fonction, id_equipe) VALUES (?, ?, ?, ?, ?, ?)",
        [nom, prenom, email, hash, "joueur", null],
        (err, result) => {
          if (err) {
            res.send({ success: false, message: err });
          } else {
            pool.query(
              "SELECT * FROM utilisateur WHERE email = ?",
              [email],
              (err, rows) => {
                if (err) {
                  res.send({ success: false, message: err });
                } else {
                  const user = rows[0];
                  // Access-Control-Allow-Credentials: true

                  req.session.user = {
                    id: user.id,
                    nom: user.nom,
                    prenom: user.prenom,
                    email: user.email,
                    fonction: user.fonction,
                  };
                  res.send({
                    success: true,
                    message: "User successfully created",
                  });
                }
              }
            );
          }
        }
      );
    }
  });
});

app.get("/api/equipes", (req, res) => {
  pool.query("SELECT * FROM equipe", (err, rows) => {
    if (err) {
      res.send({ success: false, message: err });
    } else {
      const teams = rows;
      pool.query(
        "SELECT * FROM utilisateur WHERE fonction = 'joueur'",
        (err, rows) => {
          if (err) {
            res.send({ success: false, message: err });
          } else {
            const players = rows;
            const teamsWithPlayers = teams.map((team) => {
              const playersInTeam = players.filter(
                (player) => player.id_equipe === team.id
              );
              return {
                ...team,
                joueurs: playersInTeam,
              };
            });

            res.send({ success: true, equipes: teamsWithPlayers });
          }
        }
      );
    }
  });
});

app.get("/api/chats", (req, res) => {
  if (!req.session.user) {
    res.send({ success: false, message: "Non connecté" });
    return;
  }

  // the first chat should be his team if he has one
  // return format:
  // final String logo;
  // final String recipientName;
  // final String recipientId;
  // final String recipientType;
  // final String lastMessage;
  // final String lastMessageDate;

  pool.query(
    "SELECT * FROM utilisateur WHERE id = ?",
    [req.session.user.id],
    (err, rows) => {
      if (err) {
        res.send({ success: false, message: err });
      } else {
        const user = rows[0];
        if (user.id_equipe) {
          pool.query(
            "SELECT * FROM equipe WHERE id = ?",
            [user.id_equipe],
            (err, rows) => {
              if (err) {
                res.send({ success: false, message: err });
              } else {
                const team = rows[0];
                res.send({
                  success: true,
                  chats: [
                    {
                      type: "team",
                      id: team.id,
                      nom: team.nom,
                      logo: team.logo,
                      lastMessage: "",
                      lastMessageDate: "",
                    },
                  ],
                });
              }
            }
          );
        } else {
          res.send({ success: true, chats: [] });
        }
      }
    }
  );
});

app.get("/api/private-messages/:userId1/:userId2", async (req, res) => {
  const userId1 = req.params.userId1;
  const userId2 = req.params.userId2;

  try {
    const query = ```
          SELECT m.* 
          FROM message AS m
          JOIN message_prive AS mp ON m.id = mp.id_message
          WHERE (mp.id_utilisateur1 = ? AND mp.id_utilisateur2 = ?)
             OR (mp.id_utilisateur1 = ? AND mp.id_utilisateur2 = ?)
          ORDER BY m.date ASC;;
    ```;

    const [rows] = await pool
      .promise()
      .query(query, [userId1, userId2, userId2, userId1]);

    if (rows.length === 0) {
      return res.send({
        success: true,
        messages: [],
      });
    }

    res.send({ success: true, messages: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
});

server.listen(3003, () => {
  console.log("Server is running on port 3003");
});
