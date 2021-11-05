import axios from "axios";

export const api = axios.create({
  baseURL: `https://atividade-json-serve.herokuapp.com`,
});
