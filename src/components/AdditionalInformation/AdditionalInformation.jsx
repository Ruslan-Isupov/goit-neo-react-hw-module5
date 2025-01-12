import { NavLink } from "react-router-dom";
import css from "./AdditionalInformation.module.css";
const AdditionalInformation = () => {
  return (
    <div className={css.additionalBox}>
      <h3>Additional informaton</h3>
      <nav className={css.additionalInf}>
        <NavLink className={css.additionalLink} to="cast">
          Cast
        </NavLink>
        <NavLink className={css.additionalLink} to="reviews">
          Reviews
        </NavLink>
      </nav>
    </div>
  );
};
export default AdditionalInformation;
