// const KEY = "e719831ac7cf8ee7337874baf722825d";

import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWU1YWIyMTYxNjRlMWE3MzdmZjBiNmNlMjUyOWMzNyIsIm5iZiI6MTczNjYwMTc2NS41NDcwMDAyLCJzdWIiOiI2NzgyNzBhNWM4MWFjYWE2M2RiYjlmMmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VvT2ZHok8VmkJMPU5Do1O7V6Zv38VB51fZaHypyXXI8",
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day", options);
  return response.data;
};

export const fetchSearchMovie = async (query) => {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}`, options);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits`, options);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/reviews`, options);
  return response.data.results;
};

// export default {
//   fetchTrendingMovies,
//   fetchSearchMovie,
//   fetchMovieDetails,
//   fetchMovieCast,
//   fetchMovieReviews,
// };
