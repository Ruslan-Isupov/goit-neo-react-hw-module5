import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ listOfFilm }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.movieList}>
        {listOfFilm &&
          listOfFilm.map((film) => (
            <li key={film.id}>
              {" "}
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                {film.title ? film.title : film.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieList;
