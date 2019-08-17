import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 7eee2d80d3e4a1e14b93a0a12478e2130a43217f066ea366b0e2b2818e023232'
  }
});
