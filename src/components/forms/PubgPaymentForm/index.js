import { useState } from "react";
import { BROKER_LINKS } from "../../../utils/constants";
import { SubmitButton } from "../../buttons/SubmitButton";
import apiService from "services/api";
import s from "./index.module.scss";

export const PubgPaymentForm = ({ selectedCard, className }) => {
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

  const startTransaction = (paymentType = "") => {
    return async (e) => {
      e.preventDefault();

      const isInvalidFields = isFieldsHasErrors();

      if (isInvalidFields) return;

      const params = {
        email,
        platform: "PUBGM",
      };

      if (promoCode) {
        params.promoCode = promoCode;
      }

      try {
        const response = await apiService.get(BROKER_LINKS["pubgm"], params);

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
