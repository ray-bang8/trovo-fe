import { ManagerCard } from "components/ManagerCard";
import constants from "utils/constants";
import s from "./index.module.scss";

export const OurContactsPubg = ({ anchorRef = null }) => {
  let last = constants.managers.length - 1;
  let lastManager = constants.managers[last];

  return (
    <div className={s["our-contacts-pubg"]} ref={anchorRef}>
      <h3 className={s["our-contacts-pubg__title"]}>Наши Контакты!</h3>
      <div className={s["cards-wrapper"]}>
        <ManagerCard {...lastManager} />
      </div>
    </div>
  );
};
