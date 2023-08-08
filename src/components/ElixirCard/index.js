import { OpenCardButton } from "components/buttons/OpenCardButton";
import s from "./index.module.scss";

export const ElixirCard = ({
  title = "",
  text = "",
  cost = "",
  imageSrc = "",
  onClick = () => {},
}) => {
  const colorOfPubg = "rgb(255,105,180)";
  return (
    <div className={s["elixir-card"]} onClick={onClick}>
      <div className={s["elixir-card__top"]}>
        <img className={s["elixir-card__img"]} src={imageSrc} alt="elixir" />
      </div>
      <div className={s["elixir-card__bottom"]}>
        <p
          className={
            s["elixir-card__text"] + " " + s["elixir-card__text--bold"]
          }
        >
          {title}
        </p>
        <span className={s["elixir-card__text"]}>{text}</span>
        <div className={s["elixir-card__info"]}>
          <p
            className={
              s["elixir-card__text"] + " " + s["elixir-card__text--cost"]
            }
          >
            {cost}
          </p>
          <OpenCardButton colorOfPlus={colorOfPubg} />
        </div>
      </div>
    </div>
  );
};
