import s from "./index.module.scss";

export const OtherGameCard = ({ card }) => {
  return (
    <a href={card.redirectLink}>
      <div className={s["other-game-card"]}>
        <div className={s["other-game-card__wallpaper"]}>
          <div className={s["overlay"]}></div>
            <img className={s["other-game-card__img"]} src={card.imgSrc} />
        </div>
        <div className={s["other-game-card__title"]}>
          <img className={s["other-game-card__logo"]} src={card.imgSrc} />
          <p className={s["other-game-card__text"]}>{card.name}</p>
        </div>
      </div>
    </a>
  );
};
