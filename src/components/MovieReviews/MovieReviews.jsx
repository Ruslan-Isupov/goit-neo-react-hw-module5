import { fetchMovieReviews } from "../../services/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import css from "./MovieReviews.module.css";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const movieReviewsRes = async () => {
      setLoader(true);
      setError(null);
      try {
        const reviews = await fetchMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    movieReviewsRes();
  }, [movieId]);

  return reviews?.length > 0 ? (
    <>
      {loader && <Loader />}
      <ul className={css.listReviews}>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>
              Autor: <span>{review.author}</span>
            </p>
            <p> {review.content}</p>
          </li>
        ))}
      </ul>
      {error && <ErrorMessage message={error} />}
    </>
  ) : (
    <p className={css.attention}>We dont have reviews</p>
  );
};

export default MovieReviews;
