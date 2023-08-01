import { otherGames } from "utils/constants";
import s from "./index.module.scss";

export const OtherGamesSection = () => {
    <div className={s["other-games-section"]}>
{otherGames.map((card, i) => ())}
    </div>
};
