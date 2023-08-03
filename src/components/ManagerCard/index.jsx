import s from "./index.module.scss";

export const ManagerCard = ({ name, trovo, telegram, ...props }) => {
  return (
    <div {...props} className={s["manager-card"]}>
      <div className={s["manager-card__contacts"]}>
        <div>
          <p className={s["manager-card__name"]}>{name}</p>
        </div>
        <div className={s["manager-card__links"]}>
          <p className={s["manager-card__text"]}>
            TROVO:{" "}
            <a
              href={trovo}
              target="_blank"
              className={s["contact__link"] + " " + s["contact__link--trovo"]}
            >
              {trovo}
            </a>
          </p>
          <p className={s["manager-card__text"]}>
            Telegram:{" "}
            <a
              href={telegram}
              target="_blank"
              className={
                s["contact__link"] + " " + s["contact__link--telegram"]
              }
            >
              {telegram}
            </a>
          </p>
        </div>
      </div>
      <hr className={s["manager-card__separate-line"]} />
    </div>
  );
};
