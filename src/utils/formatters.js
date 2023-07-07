import { BROKER_TYPE } from "./constants";

export const updatePaymentType = (paymentType, amount) => {
  switch (paymentType) {
    case BROKER_TYPE.qiwi:
      return Number(amount) + 2;
    case BROKER_TYPE.freekassa:
      return Number(amount) + 1;
    default:
      return amount;
  }
};
