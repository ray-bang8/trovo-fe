
import s from "./index.module.scss";
import { AccordionElement } from "components/AccordionElement";

export const HowGameWorks = ({ textContent }) => {
  return (
    <div className={s["how-game-works-wrapper"]}>
      <section className={s["how-game-works"]}>
        <h2 className={s["how-game-works__title"]}>Как это работает?</h2>
        <div className={s["how-game-works__articles"]}>
          {textContent.map(({text, title}, index) => 
            <AccordionElement className={s["accordion-element"]} title={title} key={`accordion-element-unique-key-index-${index}`}>
              {text}
            </AccordionElement>
          )}
        </div>
      </section>
    </div>
  );
};
