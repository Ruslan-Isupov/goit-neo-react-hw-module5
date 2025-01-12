import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.boxError}>
      <p className={css.error} >Not Found</p>
      {/* <img src="src\pages\NotFoundPage\pageNotFound.jpg" alt="not found page" /> */}
    </div>
  );
};

export default NotFoundPage;
