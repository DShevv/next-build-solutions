import axios from "axios";
import https from "https";

const api = axios.create({
  //withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentials": true,
  },
  baseURL: process.env.API_URL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false, // Отключает проверку SSL
  }),
});

export default api;
