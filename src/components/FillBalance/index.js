import UCCode from "assets/pubg-ucs/1pubg.png";
import TrovoCode from "assets/elixirs/25000-50000Elixirs.png";
import s from "./index.module.scss";
import { Link } from "react-router-dom";

export const FillBalance = () => {
  return (
    <div className={s["fill-balance"]}>
      <h2 className={s["fill-balance__text"]}>Пополнение Баланса</h2>
      <div className={s["fill-balance__wrapper"]}>
        <Link className={s["fill-balance__type"]} to="/pubg-shop">
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
      </div>
    </div>
  );
};
