import axios from 'axios';

const api = {
  register(email, password) {
    return axios.post('/api/register', { email, password });
  },

  login(email, password) {
    return axios.post('/api/login', { email, password });
  },

  logout() {
    return axios.get('/api/logout');
  },

  getProduits() {
    return axios.get('/api/produits');
  },

  deleteProduit(id) {
    return axios.delete('/api/produits/' + id);
  },

  postProduit(titre, contenu) {
    return axios.post('/api/produits', { titre, contenu });
  },
};

export default api;
