import { OtherGameCard } from "components/OtherGameCard";
import { otherGames } from "utils/constants";
import s from "./index.module.scss";

export const OtherGamesSection = () => {
  return (
    <div className={s["other-games-section"]}>
      {otherGames.map((card, i) => (
        <OtherGameCard card={card} />
      ))}
    </div>
  );
};
