import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import css from "./MovieDetails.module.css";

const MovieDetails = ({ filmDetails }) => {
  const location = useLocation();

  const genres = filmDetails.genres?.map((genre) => genre.name).join(",");
  const voteRage = Math.round(filmDetails?.vote_average * 10);
  const imageUrl = `https://image.tmdb.org/t/p/w500/${
    filmDetails.poster_path
      ? filmDetails?.poster_path
      : "/2oPeMkoUKWPUtYlC0TtAYpCgFOt.jpg"
  }`;

  const backLinkRef = useRef(location.state?.from ?? "/movies");

  return (
    <>
      <NavLink to={backLinkRef.current}>
        {" "}
        <button className={css.buttonBack}>Go back</button>
      </NavLink>
      <div className={css.movieDescription}>
        <img src={imageUrl} alt={filmDetails.title} width={200} height={300} />
        <div>
          {" "}
          <h2>
            {filmDetails.title} ({filmDetails.release_date?.slice(0, 4)})
          </h2>
          <p>
            User Score: <span>{voteRage}%</span>
          </p>
          <h3>Overview</h3>
          <p>{filmDetails.overview}</p>
          <h4>Genres</h4>
          <p>{genres}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
