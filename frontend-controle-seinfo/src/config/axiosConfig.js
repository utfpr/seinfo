import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('@TOKEN');
    config.headers.common['x-access-token'] = token;

    return config;
  });

export default axiosInstance;