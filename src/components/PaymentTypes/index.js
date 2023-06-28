import cardsLogo from "../../assets/logo/visa-mastercard.png";
import s from "./index.module.scss";

const PaymentTypes = () => {
  return (
    <div className={s["payment-types"]}>
      <div className={s["payment-types__type"]}>
        <img className={s["payment-types__logo"]} src={cardsLogo} />
      </div>
      <div className={s["payment-types__type"]}>
        <img className={s["payment-types__logo"]} src={cardsLogo} />
      </div>
      <div className={s["payment-types__type"]}>
        <img className={s["payment-types__logo"]} src={cardsLogo} />
      </div>
    </div>
  );
};

export default PaymentTypes;
