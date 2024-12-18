import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

axiosInstance.interceptors.request.use((config) => {
  config.headers['Authorization'] = 'Bearer your-token';
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
