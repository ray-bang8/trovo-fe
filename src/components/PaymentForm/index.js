import { useEffect, useState } from "react";
import PaymentTypes from "../PaymentTypes";
import s from "./index.module.scss";
import { CURRENCY_TYPE } from "../../utils/constants";

export const PaymentForm = ({ selectedCard, className }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [currency, setCurrency] = useState("");
  const [currencyError, setCurrencyError] = useState(false);

  const [promoCode, setPromoCode] = useState("");

  const validateName = () => {
    let name_field = name.trim();

    if (name_field.length <= 0) {
      setNameError(true);
      return true;
    }
    setNameError(false);
    return false;
  };

  const validateCurrency = () => {
    if (currency === "") {
      setCurrencyError(true);
      return true;
    }

    setCurrencyError(false);
    return false;
  };

  const isFieldsHasErrors = () => {
    let isNameError = validateName();
    let isCurrencyError = validateCurrency();

    return isNameError || isCurrencyError;
  };

  const startTransaction = (brokerType = "") => {
    return () => {
      const isInvalidFields = isFieldsHasErrors();

      if (isInvalidFields) return;

      console.log(selectedCard);

      console.log(brokerType, name, currency, promoCode);
    };
  };

  return (
    <form className={`${className} ${s["payment-form"]}`}>
      <h2 className={s["form-title"]}>Оформление Заказа</h2>
      <hr className={s["separator-line"]} />
      <span className={s["info-text"]}>
        При покупке, укажите Ваше "Имя пользователя" и эликсиры сразу
        начисляться на Ваш аккаунт!
      </span>
      <span className={s["info-text"]}>
        Вы приобретаете: {selectedCard.title}
      </span>
      <main className={s["form-fields"]}>
        <input
          className={`${s["form-fields__input"]} ${
            nameError && s["form-fields__input--error"]
          }`}
          placeholder="Имя пользователя Трово"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={validateName}
          required
        />

        <select
          className={`${s["form-fields__select"]} ${
            currencyError && s["form-fields__select--error"]
          }`}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          onBlur={validateCurrency}
          required
        >
          <option selected value={""} disabled>
            Валюта
          </option>
          <option value={CURRENCY_TYPE.RUB}>RUB</option>
          <option value={CURRENCY_TYPE.USD}>USD</option>
          <option value={CURRENCY_TYPE.EUR}>EUR</option>
        </select>

        <input
          className={s["form-fields__input"]}
          placeholder="Промокод"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          required
        />
      </main>
      <PaymentTypes startTransaction={startTransaction}></PaymentTypes>
    </form>
  );
};
