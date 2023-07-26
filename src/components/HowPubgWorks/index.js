import { CheckMarkPubgSVG } from "assets/svg/CheckMarkPubgSVG";
import s from "./index.module.scss";

export const HowPubgWorks = () => {
  return (
    <div className={s["how-pubg-works-wrapper"]}>
      <section className={s["how-pubg-works"]}>
        <h2 className={s["how-pubg-works__title"]}>Как это работает?</h2>
        <div className={s["how-pubg-works__articles"]}>
          <article className={s["article"]}>
            <h3>Как Пополнить Мой счет в PUBG MOBILE?</h3>
            <p>
              Для покупки Unknown Cash Вам необходимо, выбрать один из сетов
              выше и оплатить Ваш заказ!
            </p>
            <p>
              При оплате необходимо указать Ваш активный Email, на него Вам
              придет код после завершения оплаты.
            </p>
            <p>
              В случае, возникновения вопросов, вы всегда можете обратиться за
              помощью к нашей службе поддержки!
            </p>
            <CheckMarkPubgSVG className={s["article__checkmark"]} />
          </article>
          <article className={s["article"]}>
            <h3>Как получить бонусы за покупки?</h3>
            <p>Бонусный Unknown Cash уже вшит в код, который Вы приобрели!</p>
            <p>Бонусы варьируются в зависимости от выбранного Вами Сета!</p>
            <CheckMarkPubgSVG className={s["article__checkmark"]} />
          </article>
        </div>
      </section>
    </div>
  );
};
