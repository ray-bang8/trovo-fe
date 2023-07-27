import s from "./index.module.scss";

export const PubgModalPopup = ({
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
