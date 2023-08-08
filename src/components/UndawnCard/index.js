import { OpenCardButton } from "components/buttons/OpenCardButton";
import s from "./index.module.scss";

export const UndawnCard = ({
  title = "",
  text = "",
  cost = "",
  imageSrc = "",
  onClick = () => {},
}) => {
  const colorOfPubg = "rgb(250, 184, 51)";

  return (
    <div className={s["undawn-card"]} onClick={onClick}>
      <div className={s["undawn-card__top"]}>
        <img className={s["undawn-card__img"]} src={imageSrc} alt="elixir" />
      </div>
      <div className={s["undawn-card__bottom"]}>
        <p className={s["undawn-card__text"]}>{title}</p>
        <span
          className={
            s["undawn-card__text"] + " " + s["undawn-card__text--gray"]
          }
        >
          {text}
        </span>
        <div className={s["undawn-card__info"]}>
          <p
            className={
              s["undawn-card__text"] + " " + s["undawn-card__text--cost"]
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
