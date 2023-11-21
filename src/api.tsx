import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    language: "pt-BR",
  },
  headers:{
    Authorization: `${process.env.API_KEY}`
  }
});

export default api;

