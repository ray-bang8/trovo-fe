import PaymentTypes from "../PaymentTypes";
import s from "./index.module.scss";

export const PaymentForm = ({ className }) => {
  return (
    <div className={`${className} ${s["payment-form"]}`}>
      <h2 className={s["form-title"]}>Оформление Заказа</h2>
      <hr className={s["separator-line"]} />
      <span className={s["info-text"]}>
        При покупке, укажите Ваше "Имя пользователя" и эликсиры сразу
        начисляться на Ваш аккаунт!
      </span>
      <main className={s["form-fields"]}>
        <input
          className={s["form-fields__input"]}
          placeholder="Имя пользователя Трово"
          required
        />

        <select className={s["form-fields__select"]} required>
          <option selected disabled>
            Валюта
          </option>
          <option value={"RUB"}>RUB</option>
          <option value={"USD"}>USD</option>
          <option value={"EUR"}>EUR</option>
        </select>

        <input
          className={s["form-fields__input"]}
          placeholder="Промокод"
          required
        />
      </main>
      <PaymentTypes></PaymentTypes>
    </div>
  );
};
