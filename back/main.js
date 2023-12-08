const express = require("express");
const mysql = require("mysql2");
const session = require("express-session");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  session({
    secret: "dsof82445qs*2E",
    resave: false,
    saveUninitialized: true,
  })
);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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

app.get("/api/equipes", (req, res) => {
  pool.query("SELECT * FROM equipe", (err, rows) => {
    if (err) {
      res.send({ success: false, message: err });
    } else {
      res.send({ success: true, equipes: rows });
    }
  });
});

app.get('/api/articles', (req, res) => {
    pool.query('SELECT * FROM article', (err, rows) => {
        if (err) {
            res.send({ 'success': false, 'message': err });
        } else {
            res.send({ 'success': true, 'articles': rows });
        }
    });
});

app.get('/api/articles', (req, res) => {
    pool.query('SELECT * FROM article', (err, rows) => {
        if (err) {
            res.send({ 'success': false, 'message': err });
        } else {
            res.send({ 'success': true, 'articles': rows });
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
  pool.query("DELETE FROM produits WHERE id = ?", [id], (err, rows) => {
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
    "INSERT INTO produits (nom, quantite, prix, description, id) VALUES (?, ?, ?, ?, ?)",
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
        "INSERT INTO utilisateur (nom, prenom, email, mdp, fonction) VALUES (?, ?, ?, ?, ?)",
        [nom, prenom, email, hash, "joueur"],
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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
