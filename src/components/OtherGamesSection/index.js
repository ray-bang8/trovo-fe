import { OtherGameCard } from "components/OtherGameCard";
import { otherGames } from "utils/constants";
import s from "./index.module.scss";

export const OtherGamesSection = () => {
  return (
    <div className={s["other-games-section"]}>
      <h2 className={s["other-games-section__text"]}>ДРУГИЕ ИГРЫ</h2>
      <div className={s["other-games-section__cards"]}>
        {otherGames.map((card, i) => (
          <OtherGameCard card={card} />
        ))}
      </div>
    </div>
  );
};
