import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://happy-app-backend.herokuapp.com',
    baseURL: process.env.REACT_APP_API_URL,
});

export default api;