import { useState } from "react";
import { ElixirCard } from "../ElixirCard";
import { TrovoModalPopup } from "../modals/TrovoModalPopup";
import { useModalPopup } from "../../hooks/modalPopup";
import { TrovoPaymentForm } from "../forms/TrovoPaymentForm";
import utilConstants from "../../utils/constants";
import s from "./index.module.scss";

export const ElixirGrid = () => {
  const [isOpen, openPopup, closePopup] = useModalPopup();
  const [selectedCard, setSelectedCard] = useState({});

  const pickCard = (card) => {
    return () => {
      setSelectedCard(card);
      openPopup();
    };
  };

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
            onClick={pickCard(card)}
          />
        ))}
      </div>
      <TrovoModalPopup isOpen={isOpen} closePopup={closePopup}>
        <TrovoPaymentForm selectedCard={selectedCard} />
      </TrovoModalPopup>
    </div>
  );
};
