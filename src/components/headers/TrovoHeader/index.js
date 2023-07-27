import { Link } from "react-router-dom";
import trovoShopLogo from "assets/images/trovo-shop.png";
import s from "./index.module.scss";

export const TrovoHeader = () => {
  return (
    <header className={s["header"]}>
      <div className={s["header__left-side"]}>
        <img
          className={s["header__trovo-shop-logo"]}
          alt="trovo-logo"
          src={trovoShopLogo}
        />
      </div>
      <div className={s["header__right-side"]}>
        <nav className={s["navbar"]}>
          <ul className={s["navbar__list"]}>
            <Link className={s["list__item"]} to="/other-games">
              <a>Другие игры</a>
            </Link>
            <li className={s["list__item"]}>
              <a>Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
