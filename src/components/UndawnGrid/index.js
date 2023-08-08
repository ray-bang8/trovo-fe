import { useState } from "react";
import { UndawnCard } from "components/UndawnCard";
import { useModalPopup } from "hooks/modalPopup";
import { PubgModalPopup } from "components/modals/PubgModal";
import { UndawnPaymentForm } from "components/forms/UndawnPaymentForm";
import utilConstants from "utils/constants";
import s from "./index.module.scss";

export const UndawnGrid = () => {
  const [isOpen, openPopup, closePopup] = useModalPopup();
  const [selectedCard, setSelectedCard] = useState({});

  const pickCard = (card) => {
    console.log("clicked card");
    return () => {
      setSelectedCard(card);
      openPopup();
    };
  };

  return (
    <div className={s["undawn-grid"]}>
      <div className={s["undawn-grid__title"]}>
        <h1 className={s["undawn-grid__text"]}>Пополнение Счета</h1>
        <h3
          className={
            s["undawn-grid__text"] + " " + s["undawn-grid__text--colored"]
          }
        >
          UNDAWN
        </h3>
      </div>
      <div className={s["undawn-grid__cards"]}>
        {utilConstants.undawnCards.map((card, i) => (
          <UndawnCard
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
        <UndawnPaymentForm selectedCard={selectedCard} />
      </PubgModalPopup>
    </div>
  );
};
