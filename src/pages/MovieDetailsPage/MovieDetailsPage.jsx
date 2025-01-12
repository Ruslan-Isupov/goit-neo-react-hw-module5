import { Outlet, useParams } from "react-router-dom";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { fetchMovieDetails } from "../../services/api";
import { useEffect, useState } from "react";
import AdditionalInformation from "../../components/AdditionalInformation/AdditionalInformation";

const MovieDetailsPage = () => {
  const [filmDetails, setFilmDetails] = useState({});
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoader(false);
      setError(false);
      try {
        const filmDetails = await fetchMovieDetails(movieId);
        setFilmDetails(filmDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {filmDetails && <MovieDetails filmDetails={filmDetails} />}
      <AdditionalInformation />
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;
