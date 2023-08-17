import { useState } from "react";
import { REDEEM_CODES } from "utils/constants";
import { SubmitButton } from "../../buttons/SubmitButton";
import apiService from "services/api";
import s from "./index.module.scss";

export const RedeemCodePaymentForm = ({ selectedCard, productType }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [promoCode, setPromoCode] = useState("");

  const validateEmail = () => {
    let name_field = email.trim();

    if (name_field.length <= 0) {
      setEmailError(true);
      return true;
    }
    setEmailError(false);
    return false;
  };

  const isFieldsHasErrors = () => {
    let isNameError = validateEmail();

    return isNameError;
  };

  const startTransaction = (paymentType = "monetix", currency = "RUB") => {
    return async (e) => {
      e.preventDefault();

      const isInvalidFields = isFieldsHasErrors();

      if (isInvalidFields) return;

      const params = {
        email,
        productType: productType,
        paymentType: paymentType,
        currency: currency,
        productValue: selectedCard.value,
      };

      if (promoCode) {
        params.promoCode = promoCode;
      }

      try {
        const response = await apiService.get(REDEEM_CODES["paymentRequest"], params);

        window.location = response;
      } catch (error) {
        console.log(error, 123);
      }
    };
  };

  return (
    <form className={`${s["payment-form"]}`}>
      <h2 className={s["form-title"]}>Оформление Заказа</h2>
      <span className={s["info-text"]}>
        UC Code будет отправлен на email, который вы укажете. Пожалуйста,
        убедитесь в правильности указанного email адреса!
      </span>
      <span className={s["info-text"]}>
        Вы приобретаете: {selectedCard.title}
      </span>
      <main className={s["form-fields"]}>
        <input
          className={`${s["form-fields__input"]} ${
            emailError && s["form-fields__input--error"]
          }`}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          required
        />
        <input
          className={s["form-fields__input"]}
          placeholder="Промокод (необязательно)"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
      </main>
      <SubmitButton handleSubmit={startTransaction()} />
    </form>
  );
};
