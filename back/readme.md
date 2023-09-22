# Installation
⚠️ La base de donnée sous MySQL doit être lancée
1. `npm install`
2. `node main.js`
# Endpoints
| Endpoint | Method | Description           | Note |
|----------|--------|-----------------------|----- 
| /api     | GET    | Vérifier si l'api est en ligne         | 
| /api/user    | GET    | Obtenir des informations sur la session de l'utilisateur     | Utiliser dans un useEffect pour obtenir le pseudo et autre
| /api/articles | GET | Obtenir la liste des articles | Utiliser dans un useEffect dans la page produits
| /api/login | POST | Se connecter | Fournir `email` et `password`
| /api/register | POST | Créer un compte | Fournir `prenom` `nom` `email` `password` `confirm`