import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8443/api',
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
});
