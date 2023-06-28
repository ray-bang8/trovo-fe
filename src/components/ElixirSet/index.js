import { useState } from "react";
import ElixirCard from "../ElixirCard";
import utilConstants from "../../utils/constants";
import s from "./index.module.scss";
import { ModalPopup } from "../Modal";
import { useModalPopup } from "../../hooks/modalPopup";
import { PaymentForm } from "../PaymentForm";

const ElixirSet = () => {
  const [isOpen, openPopup, closePopup] = useModalPopup();
  const [selectedCard, setSelectedCard] = useState({});

  const pickCard = (card) => {
    return () => {
      setSelectedCard(card);
      openPopup();
      console.log(selectedCard, 111, isOpen);
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

      <ModalPopup isOpen={isOpen} closePopup={closePopup}>
        <PaymentForm selectedCard={selectedCard} />
      </ModalPopup>
    </div>
  );
};

export default ElixirSet;
