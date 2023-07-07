import { useEffect, useState } from "react";
import PaymentTypes from "../PaymentTypes";
import { BROKER_LINKS, CURRENCY_TYPE } from "../../utils/constants";
import { updatePaymentType } from "../../utils/formatters";
import { SubmitButton } from "../buttons/SubmitButton";
import s from "./index.module.scss";

export const PaymentForm = ({ selectedCard, className }) => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const [paymentType, setPaymentType] = useState("");

  const [isMobileNumberShow, setIsMobileNumberShow] = useState(false);

  const [currency, setCurrency] = useState("");
  const [currencyError, setCurrencyError] = useState(false);

  const [promoCode, setPromoCode] = useState("");

  const validateUsername = () => {
    let name_field = username.trim();

    if (name_field.length <= 0) {
      setUsernameError(true);
      return true;
    }
    setUsernameError(false);
    return false;
  };

  const validatePhoneNumber = () => {
    let name_field = phoneNumber.trim();

    if (name_field.length <= 0) {
      setPhoneNumberError(true);
      return true;
    }
    setPhoneNumberError(false);
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
    let isNameError = validateUsername();
    let isCurrencyError = validateCurrency();
    let phoneNumberError =
      paymentType === "qiwi" ? validatePhoneNumber() : false;

    return isNameError || isCurrencyError || phoneNumberError;
  };

  const startTransaction = (paymentType = "") => {
    return async (e) => {
      e.preventDefault();

      const isInvalidFields = isFieldsHasErrors();

      if (isInvalidFields) return;

      const { value: amount } = selectedCard;

      const payload = {
        currency,
        username,
        promoCode,
        "payment-type": updatePaymentType(paymentType, amount),
        platform: "TROVO",
        phoneNumber,
      };

      const payloadAsQueryParams = new URLSearchParams({ ...payload });

      const urlLink = `${
        BROKER_LINKS[paymentType]
      }${payloadAsQueryParams.toString()}`;

      try {
        const response = await fetch(urlLink);

        const redirectLink = await response.text();

        window.location = redirectLink;
      } catch (error) {
        console.log(error, 123);
      }
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
            usernameError && s["form-fields__input--error"]
          }`}
          placeholder="Имя пользователя Трово"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={validateUsername}
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
        />
        <PaymentTypes
          setPaymentType={setPaymentType}
          paymentType={paymentType}
          setIsMobileNumberShow={setIsMobileNumberShow}
        ></PaymentTypes>
        {isMobileNumberShow && (
          <input
            className={`${s["form-fields__input"]} ${
              phoneNumberError && s["form-fields__input--error"]
            }`}
            placeholder="Номер телефона"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onBlur={validatePhoneNumber}
            required
          />
        )}
      </main>
      <SubmitButton handleSubmit={startTransaction(paymentType)} />
    </form>
  );
};
