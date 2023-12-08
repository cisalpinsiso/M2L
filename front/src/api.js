import axios from 'axios';

const api = {
  register(nom, prenom, email, password, confirm) {
    return axios.post('/api/register', { nom, prenom, email, password, confirm });
  },

  login(email, password) {
    return axios.post('/api/login', { email, password });
  },

  logout() {
    return axios.get('/api/logout');
  },

  getUser() {
    return axios.get('/api/user');
  },

  updateUser(nom, prenom, email, password) {
    return axios.post('/api/user', { nom, prenom, email, password });
  },

  getEquipes() {
    return axios.get('/api/equipes');
  },

  getProduits() {
    return axios.get('/api/produits');
  },

  getArticles() {
    return axios.get('/api/articles/');
  },

  deleteProduit(id) {
    return axios.delete('/api/produits/' + id);
  },

  postProduit(titre, contenu) {
    return axios.post('/api/produits', { titre, contenu });
  },
};

export default api;
