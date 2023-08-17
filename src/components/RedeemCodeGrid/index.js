import { useState } from "react";
import { RedeemCodeCard } from "components/RedeemCodeCard";
import { useModalPopup } from "hooks/modalPopup";
import { RedeemCodeModalPopup } from "components/modals/RedeemCodeModal";
import s from "./index.module.scss";
import { RedeemCodePaymentForm } from "components/forms/RedeemCodePaymentForm";

export const RedeemCodeGrid = ({gridInfo}) => {
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
        <h3 className={s["pubg-grid__text"] + " " + s["pubg-grid__text--colored"]}>
          {gridInfo.title}
        </h3>
      </div>
      <div className={s["pubg-grid__cards"]}>
        {gridInfo.cards.map((card, i) => (
          <RedeemCodeCard
            title={card.title}
            text={card.text}
            cost={card.cost}
            imageSrc={card.src}
            key={card.value}
            onClick={pickCard(card)}
          />
        ))}
      </div>
      <RedeemCodeModalPopup isOpen={isOpen} closePopup={closePopup}>
        <RedeemCodePaymentForm selectedCard={selectedCard} productType={gridInfo.productType}/>
      </RedeemCodeModalPopup>
    </div>
  );
};
