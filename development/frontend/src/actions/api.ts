import axios from "axios";

const BACKEND_PORT: number = 8085;
const DEV: boolean = true;

const API_URL = DEV
  ? window.location.origin.replace(/:\d+/, `:${BACKEND_PORT}/api`)
  : `${window.location.origin}/api`;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
