import { PAYMENT_TYPE } from "./constants";

export const updatePaymentType = (paymentType, amount) => {
  switch (paymentType) {
    case PAYMENT_TYPE.qiwi:
      return Number(amount) + 2;
    case PAYMENT_TYPE.freekassa:
      return Number(amount) + 1;
    default:
      return amount;
  }
};
