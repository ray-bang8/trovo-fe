import { useState } from "react";
import Modal from "../Modal";
import s from "./index.module.scss";

const ElixirCard = ({
  title = "",
  text = "",
  cost = "",
  imageSrc = "",
  onClick = () => {},
}) => {
  return (
    <div className={s["elixir-card"]} onClick={onClick}>
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
    </div>
  );
};

export default ElixirCard;
