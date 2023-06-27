import { useState } from "react";
import ElixirCard from "../ElixirCard";
import Modal from "../Modal";
import utilConstants from "../../utils/constants";
import s from "./index.module.scss";

const ElixirSet = () => {
  return (
    <div className={s["elixir-set"]}>
      <div className={s["elixir-set__title"]}>
        <h1 className={s["elixir-set__text"]}>
          Trovo Shop - приобретайте с выгодой!
        </h1>
        <h3 className={s["elixir-set__text"]}>
          Выберите сет Эликсиров, который вы хотели бы получить!
        </h3>
      </div>
      <div className={s["elixir-set__cards"]}>
        {utilConstants.elixirCards.map((card, i) => (
          <ElixirCard
            title={card.title}
            text={card.text}
            cost={card.cost}
            imageSrc={card.src}
            key={card.value}
          ></ElixirCard>
        ))}
      </div>
      <Modal>Conten xfczxcd sc gdset</Modal>
    </div>
  );
};

export default ElixirSet;
