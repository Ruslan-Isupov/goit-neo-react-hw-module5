import SearchFilmForm from "../../components/SearchFilmForm/SearchFilmForm";
import { fetchSearchMovie } from "../../services/api";
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
const MoviesPage = () => {
  const [filmListOfSearch, setfilmListOfSearch] = useState([]);

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get("query");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputQuery = form.elements.query.value;
    setSearchParams({ query: inputQuery });
  };

  useEffect(() => {
    if (!queryName) return;
    const getMoviesByQuery = async () => {
      setLoader(true);
      setError(null);
      try {
        const data = await fetchSearchMovie(queryName);
        setfilmListOfSearch(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    getMoviesByQuery();
  }, [queryName]);
  return (
    <>
      <SearchFilmForm handleSubmit={handleSubmit} />
      {filmListOfSearch && <MovieList listOfFilm={filmListOfSearch} />}
      {loader && <Loader />}
      {error && <ErrorMessage message={error} />}
    </>
  );
};
export default MoviesPage;
