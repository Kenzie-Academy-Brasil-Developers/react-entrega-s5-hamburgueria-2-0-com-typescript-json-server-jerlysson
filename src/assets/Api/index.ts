import axios from "axios";

const api = axios.create({
  baseURL: "https://atividade-json-serve.herokuapp.com",
});

export default api;
