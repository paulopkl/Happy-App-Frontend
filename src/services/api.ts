import axios from 'axios';

const api = axios.create({
    baseURL: 'https://happy-app-backend.herokuapp.com'
});

export default api;