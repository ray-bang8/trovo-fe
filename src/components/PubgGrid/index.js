import { useState } from "react";
import { PubgCard } from "components/PubgCard";
import { useModalPopup } from "hooks/modalPopup";
import { PubgModalPopup } from "components/modals/PubgModal";
import { PubgPaymentForm } from "components/forms/PubgPaymentForm";
import utilConstants from "utils/constants";
import s from "./index.module.scss";

export const PubgGrid = () => {
  const [isOpen, openPopup, closePopup] = useModalPopup();
  const [selectedCard, setSelectedCard] = useState({});

  const pickCard = (card) => {
    return () => {
      setSelectedCard(card);
      openPopup();
    };
  };

  return (
    <div className={s["pubg-grid"]}>
      <div className={s["pubg-grid__title"]}>
        <h1 className={s["pubg-grid__text"]}>Пополнение Счета</h1>
        <br />
        <h3 className={s["pubg-grid__text"]}>PUBG MOBILE</h3>
      </div>
      <div className={s["pubg-grid__cards"]}>
        {utilConstants.pubgCards.map((card, i) => (
          <PubgCard
            title={card.title}
            text={card.text}
            cost={card.cost}
            imageSrc={card.src}
            key={card.value}
            onClick={pickCard(card)}
          />
        ))}
      </div>
      <PubgModalPopup isOpen={isOpen} closePopup={closePopup}>
        <PubgPaymentForm selectedCard={selectedCard} />
      </PubgModalPopup>
    </div>
  );
};
