import axios from "axios";

const api = axios.create({
  baseURL: 'https://invoice-back.vercel.app/',
});

export default api;
