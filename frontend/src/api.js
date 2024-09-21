import axios from "axios";
require("dotenv").config()

const api = axios.create({
  baseURL: process.env.SERVER_API,
  // baseURL: process.env.test_api,
});

export default api;
