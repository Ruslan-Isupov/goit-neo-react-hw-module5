// import { useSearchParams } from 'react-router-dom';
import css from './SearchFilmForm.module.css';

const SearchFilmForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input className={css.inputFilm} type="text" name="query" />
      <button className={css.buttonForm} type="submit">
        Search
      </button>
    </form>
  );
};
export default SearchFilmForm