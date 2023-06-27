import { useState } from "react";
import Modal from "../Modal";
import s from "./index.module.scss";

const ElixirCard = ({ title = "", text = "", cost = "", imageSrc = "" }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  console.log("opened", isModalOpened);
  return (
    <div className={s["elixir-card"]} onClick={() => setIsModalOpened(true)}>
      <div className={s["elixir-card__top"]}>
        <img className={s["elixir-card__img"]} src={imageSrc} alt="elixir" />
      </div>
      <div className={s["elixir-card__bottom"]}>
        <p
          className={
            s["elixir-card__text"] + " " + s["elixir-card__text--bold"]
          }
        >
          {title}
        </p>
        <span className={s["elixir-card__text"]}>{text}</span>
        <p
          className={
            s["elixir-card__text"] + " " + s["elixir-card__text--cost"]
          }
        >
          {cost}
        </p>
      </div>
      <Modal isOpened={isModalOpened}></Modal>
    </div>
  );
};

export default ElixirCard;
