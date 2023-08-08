import { useState } from "react";
import s from "./index.module.scss";

export const AccordionElement = ({ className, title, children }) => {
  const [open, toggleOpen] = useState(false);

  return (
    <div
      className={s["accordion-wrapper"]}
      onClick={() => toggleOpen((prev) => !prev)}
    >
      <details className={`${s["details"]} ${className}`} open={open}>
        <summary className={s["summary"]}>
          <h2 className={s["summary__title"]}>{title}</h2>
        </summary>
        <p className={s["summary__text"]}>{children}</p>
      </details>
      <div className={s["open-close-button"]}></div>
    </div>
  );
};
