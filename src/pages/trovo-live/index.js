import { useState } from "react";
import {
  BROKER_LINKS,
  PAYMENT_TYPE_BINANCE,
  PAYMENT_TYPE,
  PAYMENTS_LIST_BINANCE,
} from "utils/constants";
import { SubmitButton } from "components/buttons/SubmitButton";
import { Loader } from "components/Loader";
import apiService from "services/api";
import s from "./index.module.scss";

export const TrovoLive = ({ payments = [] }) => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [loading, setLoading] = useState(false);

  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");

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

  const isMobileNumberShow = selectedPayment === PAYMENT_TYPE_BINANCE.qiwi;

  const isFieldsHasErrors = () => {
    let phoneNumberError = validatePhoneNumber();

    return phoneNumberError;
  };

  const startTransaction = async (e) => {
    e.preventDefault();

    const isInvalidFields = isFieldsHasErrors();

    if (isInvalidFields) return;

    if (selectedPayment === PAYMENT_TYPE.qiwi) {
      const isInvalidFields = validatePhoneNumber();

      if (isInvalidFields) return;
    }

    const params = {
      paymentId: id,
      paymentMethod: selectedPayment,
    };

    if (phoneNumber) {
      params.phone = phoneNumber;
    }

    const payloadAsQueryParams = new URLSearchParams({ ...params });

    const urlLink = `${
      BROKER_LINKS["trovolive"]
    }${payloadAsQueryParams.toString()}`;

    setLoading(true);

    try {
      const response = await apiService.get(urlLink);

      const redirectLink = await response.text();
      window.location = redirectLink;
    } catch (error) {
      console.log(error, 123);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={s["trovo-live"]}>
      <main className={s["trovo-live__main"]}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <h3 className={s["title"]}>Способы оплаты</h3>
            <ul className={s["payments-list"]}>
              {PAYMENTS_LIST_BINANCE.map((broker, index) => {
                const isPaymentSelected = selectedPayment === broker.name;

                return (
                  <li
                    key={`unique-boker-key-index-${index}`}
                    className={`${s["broker"]} ${
                      isPaymentSelected && s["broker--selected"]
                    }`}
                    onClick={() => setSelectedPayment(broker.name)}
                  >
                    <img
                      src={broker.image}
                      className={s["broker__image"]}
                      alt="broker"
                    />
                  </li>
                );
              })}
            </ul>
            <input
              className={`${s["form-fields__input"]} 
                          ${
                            isMobileNumberShow && phoneNumberError
                              ? s["form-fields__input--error"]
                              : ""
                          } 
                          ${
                            isMobileNumberShow
                              ? s["form-fields__input--visible"]
                              : ""
                          }`}
              placeholder="Номер телефона"
              type="tel"
              value={phoneNumber}
              onBlur={validatePhoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            {phoneNumberError && (
              <p style={{ color: "red" }}>
                Неправильный формат номера телефона
              </p>
            )}
            <SubmitButton handleSubmit={startTransaction} />
            <footer className={s["trovo-live__footer"]}>
              By clicking "Pay Now", you agree to{" "}
              <a
                href="https://trovo.live/policy/terms-of-service.html"
                target="_blanc"
                className={s["terms-link"]}
              >
                Trovo's Terms
              </a>{" "}
              of Service and acknowledge our{" "}
              <a
                href="https://trovo.live/policy/terms-of-service.html"
                target="_blanc"
                className={s["terms-link"]}
              >
                Privacy Policy
              </a>{" "}
              applies. Your payment method will be saved for future purchases,
              and, if applicable, recurring subscription payments, and you agree
              that we cannot cancel your order once delivery has begun.
            </footer>
          </>
        )}
      </main>
    </div>
  );
};
