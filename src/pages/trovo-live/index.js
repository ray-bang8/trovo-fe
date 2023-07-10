import elixirLogo from "assets/elixirs/500-1000Elixirs.png";
import s from "./index.module.scss";

export const TrovoLive = () => {
  return (
    <div className={s["trovo-live"]}>
      <div className={s["trovo-live__price-info"]}>
        <div className={s["trovo-live__top"]}>
          <div className={s["trovo-live__top--left"]}>
            <img
              className={s["trovo-live__logo"]}
              src={elixirLogo}
              alt="Elixir logo"
            />
            <span>100 Elixir</span>
          </div>
          <div className={s["trovo-live__top--right"]}>
            <span>₸ 52</span>
            <span>Fees: ₸ 100 </span>
          </div>
        </div>
      </div>
    </div>
  );
};
