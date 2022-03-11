import axios from 'axios';

// base url to make requests to the movie database
// ex. instance.get('/get') => https://api.themoviedb.org/3/get
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
