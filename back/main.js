const express = require('express');
const mysql = require('mysql2');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(session({
    secret: 'dsof82445qs*2E',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'm2l',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});

app.get('/api', (req, res) => {
    res.send('API is up');
});

app.get('/api/user', (req, res) => {
    if (req.session.user) {
        res.send(req.session.user);
    } else {
        res.send({ 'message': 'error' });
    }
});

const articles = [
    {
        'id': '123',
        'nom': 'article 1',
        'quantite': '10',
        'prix': '100',
        'description': 'description 1'
    }
]

app.get('/api/articles', (req, res) => {
    res.send(articles);
});

app.delete('/api/articles/:id', (req, res) => {
    const id = req.params.id;
    pool.query('DELETE FROM articles WHERE id = ?', [id], (err, rows) => {
        if (err) {
            res.send({ 'error': err });
        } else {
            res.send({ 'message': 'success' });
        }
    });
});

app.post('/api/articles', (req, res) => {
    const titre = req.body.titre;
    const contenu = req.body.contenu;
    const id = req.session.user.id;
    pool.query('INSERT INTO articles (titre, contenu, id_utilisateur) VALUES (?, ?, ?)', [titre, contenu, id], (err, rows) => {
        if (err) {
            res.send({ 'error': err });
        } else {
            res.send({ 'message': 'success' });
        }
    });
});

const annonces = [
    {
        'id': '123',
        'nom': 'annonce 1',
        'contenu': 'description 1',
        'auteur': 'Auteur'
    }
]

app.get('/api/annonces', (req, res) => {
    res.send(annonces);
});

app.post('/api/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    pool.query('SELECT * FROM utilisateurs WHERE email = ?', [email], (err, rows) => {
        if (err) {
            res.send({ 'error': err });
        } else {
            if (rows.length > 0) {
                bcrypt.compare(password, rows[0].mdp, (err, result) => {
                    if (result) {
                        req.session.user = rows;
                        res.send({ 'message': 'success' });
                    } else {
                        res.send({ 'message': 'error' });
                    }
                });
            } else {
                res.send({ 'message': 'error' });
            }
        }
    });
});

app.get('/api/logout', (req, res) => {
    req.session.destroy();
    res.send({ 'message': 'success' });
});

app.post('/api/register', (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const password = req.body.password;
    const confirm = req.body.confirm;

    if (password === confirm) {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                res.send({ 'error': err });
            } else {
                pool.query('INSERT INTO utilisateurs (nom, prenom, email, mdp) VALUES (?, ?, ?, ?)', [nom, prenom, email, hash], (err, rows) => {
                    if (err) {
                        res.send({ 'error': err });
                    } else {
                        res.send({ 'message': 'success' });
                    }
                });
            }
        });
    } else {
        res.send({ 'message': 'error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});