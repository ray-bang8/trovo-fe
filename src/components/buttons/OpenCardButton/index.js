import { PlusIconSvg } from "assets/svg/PlusIcon";
import s from "./index.module.scss";

export const OpenCardButton = ({ colorOfPlus = "" }) => {
  return (
    <div className={s["open-card-btn"]}>
      <PlusIconSvg fillColor={colorOfPlus} />
    </div>
  );
};
