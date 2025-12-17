// api/axiosInstance.js
import axios from "axios";
import { logout } from "../utils/auth.js";

const BASE_URL = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("authToken"));

    if (!token) {
      logout();
      return Promise.reject({ message: "No token found, logging out..." });
    }
    config.headers.Authorization = `Bearer ${token}`;

    // If the data is FormData, delete Content-Type so axios can set multipart/form-data
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
