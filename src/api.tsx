import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: '05d94c508dd81c99a2c4d104fb8cc22a',
    language: "pt-BR",
  },
});

export default api;

