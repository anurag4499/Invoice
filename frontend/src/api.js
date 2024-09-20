import axios from "axios";

const api = axios.create({
  baseURL: 'https://invoice-back.vercel.app/',
  // baseURL: 'http://localhost:8081/',
});

export default api;
