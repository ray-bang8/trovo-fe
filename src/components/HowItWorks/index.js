import { CheckMarkSVG } from "../../assets/svg/CheckMarkSVG";
import s from "./index.module.scss";

const HowItWorks = () => {
  return (
    <div className={s["how-it-works-wrapper"]}>
      <section className={s["how-it-works"]}>
        <h2 className={s["how-it-works__title"]}>Как это работает?</h2>
        <div className={s["how-it-works__articles"]}>
          <article className={s["article"]}>
            <h3>Как купить Эликсиры?</h3>
            <p>
              Для покупки Эликсира Вам необходимо, выбрать один из сетов выше и
              оплатить Ваш заказ!
            </p>
            <p>
              При оплате необходимо указать Ваше "Имя Пользователя", если вы
              укажете Ваше "Отображаемое Имя" наша система не сможет вас найти и
              начислить Эликсиры. Очень важно указать "Имя Пользователя"!
            </p>
            <p>
              Вы можете найти Ваше "Имя Пользователя" в настройках Профиля, либо
              в ссылке на Ваш Трово Спейс. <br /> Пример:{" "}
              <a
                href="https://trovo.live/s/TrovoRU"
                target="_blank"
                className={s["trovo-link"]}
              >
                https://trovo.live/s/TrovoRU
              </a>
              , в этой ссылке Именем Пользователя является текст - TrovoRU, он
              находится после последнего знака "/".
            </p>
            <p>
              В случае, возникновения вопросов, вы всегда можете обратиться за
              помощью к Вашим Менеджерам!
            </p>
            <p>После оплаты Эликсир сразу поступит к Вам на аккаунт!</p>
            <CheckMarkSVG className={s["article__checkmark"]} />
          </article>
          <article className={s["article"]}>
            <h3>Как получить бонусы за покупки?</h3>
            <p>
              После оплаты, если вы хотите получить Ваши бонусы, напишите Вашему
              Менеджеру Ваш ник и какой сет вы приобрели!
            </p>
            <p>
              После сверки информации, бонусы Поступят в Течении 2 Рабочих Дней!
            </p>
            <CheckMarkSVG className={s["article__checkmark"]} />
          </article>
          <article className={s["article"]}>
            <h3>Как использовать промокод от стримера?</h3>
            <p>
              После оплаты, напишите Вашему Менеджеру от какого Стримера Вы
              пришли и укажите количество эликсиров которые вы приобрели!
            </p>
            <p>
              После сверки информации, мы запишем 2% от Вашей покупки, в
              качестве бонуса для стримера!
            </p>
            <CheckMarkSVG className={s["article__checkmark"]} />
          </article>
        </div>
      </section>
    </div>
  );
};
export default HowItWorks;
