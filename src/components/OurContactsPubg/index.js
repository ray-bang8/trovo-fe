import { ManagerCard } from "components/ManagerCard";
import constants from "../../utils/constants";
import s from "./index.module.scss";

export const OurContactsPubg = ({ anchorRef = null }) => {
  return (
    <div className={s["our-contacts-pubg"]} ref={anchorRef}>
      <h2 className={s["our-contacts-pubg__title"]}>НАШИ МЕНЕДЖЕРА</h2>
      <div className={s["cards-wrapper"]}>
        {constants.managers.map((item, index) => (
          <ManagerCard {...item} />
        ))}
      </div>
    </div>
  );
};
