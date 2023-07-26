import s from "./index.module.scss";

export const PubgCard = ({
  title = "",
  text = "",
  cost = "",
  imageSrc = "",
  onClick = () => {},
}) => {
  return (
    <div className={s["pubg-card"]} onClick={onClick}>
      <div className={s["pubg-card__top"]}>
        <img className={s["pubg-card__img"]} src={imageSrc} alt="elixir" />
      </div>
      <div className={s["pubg-card__bottom"]}>
        <p className={s["pubg-card__text"] + " " + s["pubg-card__text--bold"]}>
          {title}
        </p>
        <span className={s["pubg-card__text"]}>{text}</span>
        <p className={s["pubg-card__text"] + " " + s["pubg-card__text--cost"]}>
          {cost}
        </p>
      </div>
    </div>
  );
};
