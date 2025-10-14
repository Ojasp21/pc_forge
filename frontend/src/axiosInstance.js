// src/axiosInstance.js
import axios from 'axios';

// Create an axios instance with the base URL pointing to your backend
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URI || "https://pc-forge-backend.vercel.app/api", // Replace with your backend URL
  withCredentials: true,
});

export default axiosInstance;
