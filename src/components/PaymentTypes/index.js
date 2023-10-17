import { useState } from "react";
import { PAYMENT_TYPE } from "utils/constants";
import s from "./index.module.scss";

export const PaymentTypes = ({
  setPaymentType = "",
  setIsMobileNumberShow = false,
  paymentType = "",
}) => {
  const [currency, setCurrency] = useState("");
  const [currencyError, setCurrencyError] = useState(false);

  const validateCurrency = () => {
    if (currency === "") {
      setCurrencyError(true);
      return true;
    }

    setCurrencyError(false);
    return false;
  };

  const setPayment = (e) => {
    setPaymentType(e.target.value);
    if (e.target.value === "qiwi") {
      setIsMobileNumberShow(true);
    } else {
      setIsMobileNumberShow(false);
    }
  };

  return (
    <div className={s["payment-types"]}>
      <select
        className={`${s["form-fields__select"]} ${
          currencyError && s["form-fields__select--error"]
        }`}
        value={paymentType}
        onChange={(e) => setPayment(e)}
        required
      >
        <option selected value={""} disabled>
          Способ оплаты
        </option>
        <option value={PAYMENT_TYPE.card}>Банковская карта</option>
        <option value={PAYMENT_TYPE.qiwi}>Платежная система QIWI</option>
        <option value={PAYMENT_TYPE.binance}>
          Платежная система BINANCE PAY
        </option>
        <option value={PAYMENT_TYPE.freekassa}>
          Платежная система FREEKASSA
        </option>
      </select>
    </div>
  );
};
