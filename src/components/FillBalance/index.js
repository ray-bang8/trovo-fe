import { Link } from "react-router-dom";
import UCCode from "assets/pubg-ucs/1pubg.png";
import TrovoCode from "assets/elixirs/25000-50000Elixirs.png";
import UndawnCode from "assets/logo/undawnLogo.png";
import ArenaCode from "assets/logo/arenaLogo.png";
import s from "./index.module.scss";

export const FillBalance = () => {
  return (
    <div className={s["fill-balance"]}>
      <h2 className={s["fill-balance__text"]}>Пополнение Баланса</h2>
      <div className={s["fill-balance__wrapper"]}>
        <Link
          className={
            s["fill-balance__type"] + " " + s["fill-balance__type--pubg"]
          }
          to="/pubg-shop"
        >
          <img className={s["fill-balance__logo"]} src={UCCode} alt="UC Code" />
          <p className={s["fill-balance__text"]}>PUBG MOBILE: UC Коды</p>
        </Link>
        <Link
          className={
            s["fill-balance__type"] + " " + s["fill-balance__type--trovo"]
          }
          to="/trovo-shop"
        >
          <img
            className={s["fill-balance__logo"]}
            src={TrovoCode}
            alt="Trovo Code"
          />
          <p className={s["fill-balance__text"]}>Trovo: Пополнение Elixir</p>
        </Link>
        <Link
          className={
            s["fill-balance__type"] + " " + s["fill-balance__type--undawn"]
          }
          to="/undawn-shop"
        >
          <img
            className={s["fill-balance__logo"]}
            src={UndawnCode}
            alt="Undawn Code"
          />
          <p className={s["fill-balance__text"]}>Undawn: Пополнение RC</p>
        </Link>
        <Link
          className={
            s["fill-balance__type"] + " " + s["fill-balance__type--arena"]
          }
          to="/arena-shop"
        >
          <img
            className={s["fill-balance__logo"]}
            src={ArenaCode}
            alt="Arena Code"
          />
          <p className={s["fill-balance__text"]}>Arena: Пополнение RC</p>
        </Link>
      </div>
    </div>
  );
};
