import s from "./index.module.scss";

export const SubmitButton = ({ className, handleSubmit = () => {} }) => {
  return (
    <div className={s["submit-button"]}>
      <button className={s["submit-button__btn"]} onClick={handleSubmit}>
        Оплатить
      </button>
    </div>
  );
};
