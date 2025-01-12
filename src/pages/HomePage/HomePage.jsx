import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { fetchTrendingMovies } from "../../services/api";
import css from "./HomePage.module.css";
const HomePage = () => {
  const [movieList, setMovielist] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setLoader(true);
        setError(null);
        const response = await fetchTrendingMovies();
        console.log(response);
        setMovielist(response.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending Today</h1>
      {loader && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movieList.length > 0 && <MovieList listOfFilm={movieList} />}
    </>
  );
};
export default HomePage;
