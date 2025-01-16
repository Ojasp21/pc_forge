// src/axiosInstance.js
import axios from 'axios';

// Create an axios instance with the base URL pointing to your backend
const axiosInstance = axios.create({
  baseURL: 'http://localhost:2000/', // Replace with your backend URL
  timeout: 5000, // Optional: Set timeout for requests (in ms)
});

export default axiosInstance;
