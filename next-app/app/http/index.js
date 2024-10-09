import axios from "axios";

const api = axios.create({
  //withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentials": true,
  },
  baseURL: "http://localhost:3005",
});

export default api;
