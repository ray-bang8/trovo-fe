
import s from "./index.module.scss";
import { AccordionElement } from "components/AccordionElement";

const textContent = [{
  title: "Как Пополнить Мой счет в PUBG MOBILE?",
  text: "Для покупки Unknown Cash Вам необходимо, выбрать один из сетов выше и оплатить Ваш заказ!При оплате необходимо указать Ваш активный Email, на него Вам придет код после завершения оплаты.В случае, возникновения вопросов, вы всегда можете обратиться за помощью к нашей службе поддержки!"
}, {
  title: "Как получить бонусы за покупки?",
  text: "Our managers are always ready to answer your questions. You can call us during the weekends and at night. Also, you can visit our office for a personal consultation."
}]

export const HowPubgWorks = () => {
  return (
    <div className={s["how-pubg-works-wrapper"]}>
      <section className={s["how-pubg-works"]}>
        <h2 className={s["how-pubg-works__title"]}>Как это работает?</h2>
        <div className={s["how-pubg-works__articles"]}>
        {textContent.map(({text, title}, index) => <AccordionElement className={s["accordion-element"]} title={title} key={`accordion-element-unique-key-index-${index}`}>{text}</AccordionElement>)}

        </div>
      </section>
    </div>
  );
};
