import { createPortal } from "react-dom";
import s from "./index.module.scss";

const Modal = () => {
  return createPortal(<div>Content</div>, document.getElementById("modal"));
};

export default Modal;
