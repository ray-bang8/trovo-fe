import s from "./index.module.scss";

const ElixirCard = ({ title = "", text = "", cost = "" }) => {
  return (
    <div className={s["elixir-card"]}>
      <div className={s["elixir-card__top"]}>
        <img />
      </div>
      <div className={s["elixir-card__bottom"]}>
        <p className={s["elixir-card__text"]}>{title}</p>
        <span className={s["elixir-card__text"]}>{text}</span>
        <p className={s["elixir-card__text"]}>{cost}</p>
      </div>
    </div>
  );
};

export default ElixirCard;
