import trovoLogo from "../../assets/logo/logo.png";
import trovoShopLogo from "../../assets/images/trovo-shop.png";
import s from "./index.module.scss";

const Header = () => {
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
            <li className={s["list__item"]}>
              <a>Другие игры</a>
            </li>
            <li className={s["list__item"]}>
              <a>Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
