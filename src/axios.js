import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5001/challenge-a059f/us-central1/api', // the api url
});

export default instance;
 