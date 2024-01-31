import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    language: "pt-BR",
  },
  headers:{
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNWQ5NGM1MDhkZDgxYzk5YTJjNGQxMDRmYjhjYzIyYSIsInN1YiI6IjY1NTdjN2IxNTM4NjZlMDEzOWUzMjY4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.augodUWvifIqK-Nvvb0R1oyyMClszCiEJ-uENOXt4J4'
  }
});

export default api;

