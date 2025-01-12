import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
const Navigation = () => {
  return (
    <header>
      <nav className={css.header}>
        <NavLink className={css.styledLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.styledLink} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
export default Navigation;
