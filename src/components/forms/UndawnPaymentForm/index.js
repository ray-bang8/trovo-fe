import { useEffect, useState } from "react";
import { PaymentTypes } from "components/PaymentTypes";
import { BROKER_LINKS, CURRENCY_TYPE } from "utils/constants";
import { updatePaymentType } from "utils/formatters";
import { SubmitButton } from "components/buttons/SubmitButton";
import apiService from "services/api";
import s from "./index.module.scss";

export const UndawnPaymentForm = ({ selectedCard, className }) => {
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

  useEffect(() => console.log("hello"));

  const validatePhoneNumber = () => {
    let name_field = phoneNumber.trim();

    const phoneNumberPattern =
      /^(91|994|82|372|375|374|44|998|972|66|90|507|7|77|380|371|370|996|9955|992|373|84)[0-9]{6,14}$/;

    if (name_field.length <= 0 || !phoneNumberPattern.test(phoneNumber)) {
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

      const params = {
        currency,
        username,
        "payment-type": updatePaymentType(paymentType, amount),
      };

      if (phoneNumber) {
        params.phone = phoneNumber;
      }

      if (promoCode) {
        params.promoCode = promoCode;
      }

      try {
        const response = await apiService.get(
          BROKER_LINKS[paymentType],
          params
        );

        window.location = response;
      } catch (error) {
        console.log(error, 123);
      }
    };
  };

  return (
    <form className={`${className} ${s["payment-form"]}`}>
      <h2 className={s["form-title"]}>Оформление Заказа</h2>
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
          <>
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
            {phoneNumberError && (
              <p style={{ color: "red" }}>
                Неправильный формат номера телефона
              </p>
            )}
          </>
        )}
      </main>
      <SubmitButton handleSubmit={startTransaction(paymentType)} />
    </form>
  );
};
