import { Link } from "react-router-dom";
import trovoShopLogo from "assets/images/trovo-shop.png";
import pubgShopLogo from "assets/images/pubg-shop.png";
import s from "./index.module.scss";

export const PubgHeader = () => {
  return (
    <header className={s["header"]}>
      <div className={s["header__left-side"]}>
        <Link to="/other-games">
          <img
            className={s["header__trovo-shop-logo"]}
            alt="trovo-logo"
            src={trovoShopLogo}
          />
        </Link>

        <div className={s["header__separator"]}></div>
        <Link to="/pubg-shop">
          <img
            className={s["header__trovo-shop-logo"]}
            alt="trovo-logo"
            src={pubgShopLogo}
          />
        </Link>
      </div>
      <div className={s["header__right-side"]}>
        <nav className={s["navbar"]}>
          <ul className={s["navbar__list"]}>
            <li className={s["list__item"]}>
              <a>Активация Кода</a>
            </li>
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
