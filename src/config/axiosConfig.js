import axios from 'axios';
import { baseUrl } from './baseUrl';

const instance = axios.create({
    baseURL: baseUrl,
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('userToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

export default instance;