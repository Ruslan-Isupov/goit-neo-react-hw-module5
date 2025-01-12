import { fetchMovieCast } from "../../services/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./MovieCast.module.css";
const MovieCast = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieCastRes = async () => {
      setLoader(true);
      setError(null);
      try {
        const movieCast = await fetchMovieCast(movieId);
        setCast(movieCast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    movieCastRes();
  }, [movieId]);

  return (
    <>
      <ul className={css.listCast}>
        {cast?.map((cast) => {
          return (
            <li key={cast.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${
                  cast?.profile_path
                    ? cast?.profile_path
                    : "o1fDxkAnyGCU9Fs2jfUHHzfXXiS.jpg"
                }`}
                alt={cast.name}
                width={100}
                height={150}
              />
              <p> {cast.name}</p>
              <p>
                {" "}
                Character:{" "}
                {cast.character ? cast.character : "Without information"}
              </p>
            </li>
          );
        })}
      </ul>
      {loader && <Loader />}
      {error && <ErrorMessage message={error} />}
    </>
  );
};

export default MovieCast;
