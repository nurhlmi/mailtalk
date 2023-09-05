import axios from "axios";

let baseURL = "http://localhost:8000/api/";
// let baseURL = "http://api.siwira.id/api/";

axios.defaults.baseURL = baseURL;
axios.interceptors.request.use((config) => {
   const token = localStorage.getItem("token");
   if (token) config.headers.Authorization = `Bearer ${token}`;
   return config;
});

export default axios;
