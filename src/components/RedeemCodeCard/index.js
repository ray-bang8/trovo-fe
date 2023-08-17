import { OpenCardButton } from "components/buttons/OpenCardButton";
import s from "./index.module.scss";

export const RedeemCodeCard = ({
  title = "",
  text = "",
  cost = "",
  imageSrc = "",
  onClick = () => {},
}) => {
  const colorOfPubg = "rgb(250, 184, 51)";

  return (
    <div className={s["pubg-card"]} onClick={onClick}>
      <div className={s["pubg-card__top"]}>
        <img className={s["pubg-card__img"]} src={imageSrc} alt="elixir" />
      </div>
      <div className={s["pubg-card__bottom"]}>
        <p className={s["pubg-card__text"]}>{title}</p>
        <span className={s["pubg-card__text"] + " " + s["pubg-card__text--gray"]}>
          {text}
        </span>
        <div className={s["pubg-card__info"]}>
          <p className={s["pubg-card__text"] + " " + s["pubg-card__text--cost"]}>
            {cost}
          </p>
          <OpenCardButton colorOfPlus={colorOfPubg} />
        </div>
      </div>
    </div>
  );
};
