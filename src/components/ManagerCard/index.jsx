import s from "./index.module.scss";

export const ManagerCard = ({ name, trovo, telegram, ...props }) => {
  return (
    <div {...props} className={s["manager-card"]}>
      <h4 className={s["manager-card__title"]}>{name}</h4>
      <hr className={s["manager-card__separate-line"]} />
      <div className={s["manager-card__contacts"]}>
        <p>
          TROVO:{" "}
          <a
            href={trovo}
            target="_blank"
            className={s["contact__link"] + " " + s["contact__link--trovo"]}
          >
            {trovo}
          </a>
        </p>
        <p>
          Telegram:{" "}
          <a
            href={telegram}
            target="_blank"
            className={s["contact__link"] + " " + s["contact__link--telegram"]}
          >
            {telegram}
          </a>
        </p>
      </div>
    </div>
  );
};
