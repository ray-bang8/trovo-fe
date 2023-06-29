import cardsLogo from "../../assets/logo/visa-mastercard.png";
import freeKassaLogo from "../../assets/logo/freekassa.jpg";
import binanceLogo from "../../assets/logo/binance.jpg";
import s from "./index.module.scss";

const PaymentTypes = () => {
  return (
    <div className={s["payment-types"]}>
      <div className={s["payment-types__type"]}>
        <img
          className={s["payment-types__logo"]}
          src={cardsLogo}
          alt="cards-logo"
        />
      </div>
      <div className={s["payment-types__type"]}>
        <img
          className={s["payment-types__logo"]}
          src={freeKassaLogo}
          alt="freekassa-logo"
        />
      </div>
      <div className={s["payment-types__type"]}>
        <img
          className={s["payment-types__logo"]}
          src={binanceLogo}
          alt="binance-logo"
        />
      </div>
    </div>
  );
};

export default PaymentTypes;
