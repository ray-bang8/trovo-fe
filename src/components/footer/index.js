import s from "./index.module.scss";

export const Footer = () => {
  return (
    <footer className={s["footer"]}>
      <nav className={s["nav"]}>
        <a className={s["nav__link"]} href="https://trovovip.com/">
          Главная страница
        </a>
        <a
          className={s["nav__link"]}
          href="https://trovovip.com/page32962608.html"
        >
          Условия пользования
        </a>
        <a
          className={s["nav__link"]}
          href="https://trovovip.com/privacy_policy"
        >
          Политика приватности
        </a>
        <a className={s["nav__link"]} href="https://trovovip.com/refund_policy">
          Политика возврата
        </a>
      </nav>
      <div>
        <p className={s["nav__text"]}>
          COPYRIGHT © AQUA CREATIVE (GLOBAL) LTD.
          <br />
          ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};
