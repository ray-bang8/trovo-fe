import "@fontsource/inter/600.css";
import "@fontsource/inter/400.css";
import { useCallback, useState } from "react";
import {
  BROKER_LINKS,
  PAYMENT_TYPE_BINANCE,
  PAYMENTS_LIST_TROVO_LIVE,
} from "utils/constants";
import { Loader } from "components/Loader";
import apiService from "services/api";
import { useMask } from "@react-input/mask";
import pubgShopLogo from "assets/svg/logo.svg";
import cn from "classnames";
import styles from "./index.module.scss";

export const TrovoLive = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const inputRef = useMask({
    mask: "+7 (___) ___-__-__",
    replacement: { _: /\d/ },
  });

  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  const amount = queryParameters.get("amount");
  const price = queryParameters.get("price");

  const isQiwiPayment = selectedPayment === PAYMENT_TYPE_BINANCE.qiwi;
  const disabled =
    !Boolean(selectedPayment) || (isQiwiPayment && phoneNumber.length < 18);

  const onChangePaymentHandler = useCallback((payment) => {
    setPhoneNumber("");
    setSelectedPayment(payment);
  }, []);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!selectedPayment || !id) return;

      const params = {
        paymentId: id,
        paymentMethod: selectedPayment,
      };

      if (phoneNumber) {
        params.phone = phoneNumber.replace(/[^0-9]/g, "");
      }

      const payloadAsQueryParams = new URLSearchParams({ ...params });

      const urlLink = `${
        BROKER_LINKS["trovolive"]
      }${payloadAsQueryParams.toString()}`;

      setLoading(true);

      try {
        window.location = await apiService.get(urlLink);
      } catch (error) {
        setLoading(false);
        console.log("error", error.response.statusText);
      }
    },
    [phoneNumber, id, selectedPayment]
  );

  return (
    <div className={styles.modal}>
      <main className={styles.main}>
        {loading && <Loader />}

        {!loading && (
          <>
            <h3 className={styles.title}>Оформление заказа</h3>

            <div className={styles.order__container}>
              <h4 className={styles.title__secondary}>Ваш заказ:</h4>

              <div className={styles.order}>
                <p>{amount} эликсиров</p>
                <hr className={styles.hr} />
                <div className={styles.summary}>
                  Итого:
                  <p className={styles.summary__amount}>{price} ₽</p>
                </div>
              </div>
            </div>

            <div className={styles.payment__container}>
              <h4 className={styles.title__secondary}>
                Выберите способ оплаты:
              </h4>

              <ul className={styles.payment__list}>
                {PAYMENTS_LIST_TROVO_LIVE
                .map((broker, index) => {
                  const isPaymentSelected = selectedPayment === broker.name;

                  return (
                    <li
                      key={`unique-boker-key-index-${index}`}
                      className={cn(
                        styles.broker,
                        isPaymentSelected && styles.broker__selected
                      )}
                      onClick={() => onChangePaymentHandler(broker.name)}
                    >
                      <img
                        src={broker.image}
                        className={styles.broker__image}
                        alt="broker"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.phone__container}>
              <h4 className={styles.title__secondary}>
                Укажите ваш номер телефона:
              </h4>

              <input
                className={cn(
                  styles.input,
                  isQiwiPayment && styles.input__shown
                )}
                ref={inputRef}
                placeholder="+7 (___) ___-__-__"
                value={phoneNumber}
                onChange={(e) =>
                  setPhoneNumber(e.target.value ?? e.currentTarget.value)
                }
              />
            </div>

            <button
              onClick={onSubmit}
              className={styles.submit}
              disabled={disabled}
            >
              Оплатить
            </button>

            <footer className={styles.footer}>
              <img
                className={styles.logo}
                src={pubgShopLogo}
                alt="trovo logo"
              />

              <div className={styles.footer__text}>
                By clicking "Pay Now", you agree to{" "}
                <a
                  href="https://trovo.live/policy/terms-of-service.html"
                  target="_blanc"
                >
                  Trovo's Terms
                </a>{" "}
                of Service and acknowledge our{" "}
                <a
                  href="https://trovo.live/policy/terms-of-service.html"
                  target="_blanc"
                >
                  Privacy Policy
                </a>{" "}
                applies. Your payment method will be saved for future purchases,
                and, if applicable, recurring subscription payments, and you
                agree that we cannot cancel your order once delivery has begun.
              </div>
            </footer>
          </>
        )}
      </main>
    </div>
  );
};
