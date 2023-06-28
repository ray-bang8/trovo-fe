import { createPortal } from "react-dom";
import s from "./index.module.scss";

export const ModalPopup = ({
  isOpen = false,
  closePopup = () => {},
  children,
}) => {
  return (
    <div
      className={`${s["popup-wrapper"]} ${
        isOpen ? s["popup-wrapper--visible"] : ""
      }`}
      onClick={closePopup}
    >
      <div className={s["popup-content"]} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
