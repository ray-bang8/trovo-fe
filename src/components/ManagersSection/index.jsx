import constants from "utils/constants";
import { ManagerCard } from "../ManagerCard";
import s from "./index.module.scss";

export const ManagersSection = ({ anchorRef = null }) => {
  return (
    <div className={s["managers-section-wrapper"]} ref={anchorRef}>
      <section className={s["managers-section"]}>
        <h2 className={s["managers-section__title"]}>Наши менеджера</h2>
        <div className={s["cards-wrapper"]}>
          {constants.managers.map((item, index) => (
            <ManagerCard {...item} key={`manager-card-key-index-${index}`} />
          ))}
        </div>
      </section>
    </div>
  );
};
