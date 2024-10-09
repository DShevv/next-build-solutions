import axios from "axios";

const api = axios.create({
  //withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentials": true,
  },
  baseURL: process.env.API_URL,
});

export default api;
