import oneElixir from "../assets/elixirs/1Elixir.png";
import oneHundredElixirs from "../assets/elixirs/100Elixirs.png";
import fiveHundredElixirs from "../assets/elixirs/500-1000Elixirs.png";
import twoThousandElixirs from "../assets/elixirs/2000Elixirs.png";
import fiveThousandElixirs from "../assets/elixirs/5000-10000Elixirs.png";
import twentyFiveThousandElixirs from "../assets/elixirs/25000-50000Elixirs.png";
import oneHundredThousandElixirs from "../assets/elixirs/100000-250000Elixirs.png";
import fiveHundredThousandElixirs from "../assets/elixirs/500000Elixirs.png";
import sixtyUC from "assets/pubg-ucs/1pubg.png";
import threeHundredUC from "assets/pubg-ucs/300pubg.png";
import sixThousandUC from "assets/pubg-ucs/6000pubg.png";
import thirtyThousandUC from "assets/pubg-ucs/32000pubg.png";
import qiwiImage from "../assets/logo/qiwi.jpg";
import cardImage from "../assets/logo/visa-mastercard.png";
import binanceImage from "../assets/logo/binance.jpg";
import pubgLogo from "assets/logo/pubg-logo.jpg";
import undawnMain from "assets/logo/undawn-main.png";
import arenaBreakoutMain from "assets/logo/arena-breakout-main.jpg";
import trovoElixirsMain from "assets/logo/trovo-elixirs-main.png";
import undawnLogo from "assets/logo/undawn.png";
import * as arenaBreakoutImages from "../assets/arena-breakout";

const elixirCards = [
  {
    value: 1,
    title: "1 Elixir",
    text: "1 Elixir",
    cost: "₽ 9.29",
    src: oneElixir,
  },
  {
    value: 100,
    title: "100 Elixirs",
    text: "100 Elixirs",
    cost: "₽ 92.9",
    src: oneHundredElixirs,
  },
  {
    value: 500,
    title: "500 Elixirs",
    text: "500 Elixirs",
    cost: "₽ 465",
    src: fiveHundredElixirs,
  },
  {
    value: 1000,
    title: "1000 Elixirs + 10 FREE",
    text: "1010 Elixirs",
    cost: "₽ 929",
    src: fiveHundredElixirs,
  },
  {
    value: 2000,
    title: "2000 Elixirs + 20 FREE",
    text: "2020 Elixirs",
    cost: "₽ 1860",
    src: twoThousandElixirs,
  },
  {
    value: 5000,
    title: "5000 Elixirs + 100 FREE",
    text: "5100 Elixirs",
    cost: "₽ 4640",
    src: fiveThousandElixirs,
  },
  {
    value: 10000,
    title: "10000 Elixirs + 300 FREE",
    text: "10300 Elixirs",
    cost: "₽ 9290",
    src: fiveThousandElixirs,
  },
  {
    value: 25000,
    title: "25000 Elixirs + 1000 FREE",
    text: "26000 Elixirs",
    cost: "₽ 23220",
    src: twentyFiveThousandElixirs,
  },
  {
    value: 50000,
    title: "50000 Elixirs + 2000 FREE",
    text: "52000 Elixirs",
    cost: "₽ 46450",
    src: twentyFiveThousandElixirs,
  },
  {
    value: 100000,
    title: "100000 Elixirs + 5000 FREE",
    text: "105000 Elixirs",
    cost: "₽ 92900",
    src: oneHundredThousandElixirs,
  },
  {
    value: 250000,
    title: "250000 Elixirs + 12500 FREE",
    text: "262500 Elixirs",
    cost: "₽ 232250",
    src: oneHundredThousandElixirs,
  },
  {
    value: 500000,
    title: "500000 Elixirs + 25000 FREE",
    text: "525000 Elixirs",
    cost: "₽ 464500",
    src: fiveHundredThousandElixirs,
  },
];

const pubgCards = [
  {
    value: 1,
    title: "60 UC",
    text: "60 Unknown Cash",
    cost: "₽ 83.90",
    src: sixtyUC,
  },
  {
    value: 300,
    title: "300 UC + 25 FREE",
    text: "325 Unknown Cash",
    cost: "₽ 399.90",
    src: sixtyUC,
  },
  {
    value: 600,
    title: "600 UC + 60 FREE",
    text: "660 Unknown Cash",
    cost: "₽ 799.90",
    src: threeHundredUC,
  },
  {
    value: 1500,
    title: "1500 UC + 300 FREE",
    text: "1800 Unknown Cash",
    cost: "₽ 1,999.00",
    src: threeHundredUC,
  },
  {
    value: 6000,
    title: "6000 UC + 2100 FREE",
    text: "8100 Unknown Cash",
    cost: "₽ 8,149.90",
    src: sixThousandUC,
  },
  {
    value: 12000,
    title: "12000 UC + 4200 FREE",
    text: "16200 Unknown Cash",
    cost: "₽ 16,139.90",
    src: thirtyThousandUC,
  },
  {
    value: 18000,
    title: "18000 UC + 6300 FREE",
    text: "24300 Unknown Cash",
    cost: "₽ 24,545.90",
    src: thirtyThousandUC,
  },
  {
    value: 24000,
    title: "24000 UC + 8400 FREE",
    text: "32400 Unknown Cash",
    cost: "₽ 32,745.90",
    src: thirtyThousandUC,
  },
];

const undawnCards = [
  {
    value: 60,
    title: "60 UC",
    text: "60 Unknown Cash",
    cost: "₽ 75.76",
    src: undawnLogo,
  },
  {
    value: 300,
    title: "300 UC + 25 FREE",
    text: "325 Unknown Cash",
    cost: "₽ 380.41",
    src: undawnLogo,
  },
  {
    value: 600,
    title: "600 UC + 60 FREE",
    text: "660 Unknown Cash",
    cost: "₽ 772.16",
    src: undawnLogo,
  },
  {
    value: 1500,
    title: "1500 UC + 300 FREE",
    text: "1800 Unknown Cash",
    cost: "₽ 1,988.66",
    src: undawnLogo,
  },
  {
    value: 6000,
    title: "6000 UC + 2100 FREE",
    text: "8100 Unknown Cash",
    cost: "₽ 7,975.26",
    src: undawnLogo,
  },
  {
    value: 12000,
    title: "12000 UC + 4200 FREE",
    text: "16200 Unknown Cash",
    cost: "₽ 18,875.26",
    src: undawnLogo,
  },
  {
    value: 18000,
    title: "18000 UC + 6300 FREE",
    text: "24300 Unknown Cash",
    cost: "₽ 23,195.88",
    src: undawnLogo,
  },
  {
    value: 24000,
    title: "24000 UC + 8400 FREE",
    text: "32400 Unknown Cash",
    cost: "₽ 30,824.74",
    src: undawnLogo,
  },
];

const arenaBreakoutCards = [
  {
    value: 60,
    title: "60 UC",
    text: "60 Unknown Cash",
    cost: "₽ 75.76",
    src: arenaBreakoutImages.ab1,
  },
  {
    value: 300,
    title: "300 UC + 25 FREE",
    text: "325 Unknown Cash",
    cost: "₽ 380.41",
    src: arenaBreakoutImages.ab1,
  },
  {
    value: 600,
    title: "600 UC + 60 FREE",
    text: "660 Unknown Cash",
    cost: "₽ 772.16",
    src: arenaBreakoutImages.ab1,
  },
  {
    value: 1500,
    title: "1500 UC + 300 FREE",
    text: "1800 Unknown Cash",
    cost: "₽ 1,988.66",
    src: arenaBreakoutImages.ab1,
  },
  {
    value: 6000,
    title: "6000 UC + 2100 FREE",
    text: "8100 Unknown Cash",
    cost: "₽ 7,975.26",
    src: arenaBreakoutImages.ab2,
  },
  {
    value: 12000,
    title: "12000 UC + 4200 FREE",
    text: "16200 Unknown Cash",
    cost: "₽ 18,875.26",
    src: arenaBreakoutImages.ab3,
  },
  {
    value: 18000,
    title: "18000 UC + 6300 FREE",
    text: "24300 Unknown Cash",
    cost: "₽ 23,195.88",
    src: arenaBreakoutImages.ab4,
  },
  {
    value: 24000,
    title: "24000 UC + 8400 FREE",
    text: "32400 Unknown Cash",
    cost: "₽ 30,824.74",
    src: arenaBreakoutImages.ab5,
  },
];

const managers = [
  {
    name: "Yeldorator",
    trovo: "https://trovo.live/s/Yeldorator_A",
    telegram: "https://t.me/yeldorator",
  },
  {
    name: "Idaliya",
    trovo: "https://trovo.live/s/Idaliya",
    telegram: "https://t.me/id0507",
  },
  {
    name: "Danelle",
    trovo: "https://trovo.live/s/ugh_danelle",
    telegram: "https://t.me/morningdewdeath",
  },
  {
    name: "Aikhanym",
    trovo: "https://trovo.live/assankhana",
    telegram: "https://t.me/alieneerie",
  },
  {
    name: "Kura",
    trovo: "https://trovo.live/s/Kura0511",
    telegram: "https://t.me/Kura0511",
  },
  {
    name: "Наши Контакты",
    trovo: "https://trovovip.com/",
    telegram: "https://t.me/trovoshop_bot",
  },
];

const pubgHowGameWorks = [{
  title: "Как Пополнить Мой счет в PUBG MOBILE?",
  text: "Для покупки Unknown Cash Вам необходимо, выбрать один из сетов выше и оплатить Ваш заказ!При оплате необходимо указать Ваш активный Email, на него Вам придет код после завершения оплаты.В случае, возникновения вопросов, вы всегда можете обратиться за помощью к нашей службе поддержки!"
}, {
  title: "Как получить бонусы за покупки?",
  text: "Our managers are always ready to answer your questions. You can call us during the weekends and at night. Also, you can visit our office for a personal consultation."
}];

const arenaBreakoutHowGameWorks = [{
  title: "Как Пополнить Мой счет в ARENA BREAKOUT",
  text: "Для покупки Unknown Cash Вам необходимо, выбрать один из сетов выше и оплатить Ваш заказ!При оплате необходимо указать Ваш активный Email, на него Вам придет код после завершения оплаты.В случае, возникновения вопросов, вы всегда можете обратиться за помощью к нашей службе поддержки!"
}, {
  title: "Как получить бонусы за покупки?",
  text: "Our managers are always ready to answer your questions. You can call us during the weekends and at night. Also, you can visit our office for a personal consultation."
}];

const undawnHowGameWorks = [{
  title: "Как Пополнить Мой счет в UNDAWN?",
  text: "Для покупки Unknown Cash Вам необходимо, выбрать один из сетов выше и оплатить Ваш заказ!При оплате необходимо указать Ваш активный Email, на него Вам придет код после завершения оплаты.В случае, возникновения вопросов, вы всегда можете обратиться за помощью к нашей службе поддержки!"
}, {
  title: "Как получить бонусы за покупки?",
  text: "Our managers are always ready to answer your questions. You can call us during the weekends and at night. Also, you can visit our office for a personal consultation."
}];

export const PAYMENT_TYPE = {
  binance: "binance",
  card: "card",
  freekassa: "freekassa",
  qiwi: "qiwi",
};

export const PAYMENT_TYPE_BINANCE = {
  binance: "monetix_binance",
  card: "monetix_card",
  freekassa: "freekassa",
  qiwi: "qiwi_wallet",
};

export const BROKER_LINKS = {
  binance: "/monetix/payin/binance?",
  card: "/monetix/payin/card?",
  freekassa: "/free-kassa/payin?",
  qiwi: "/qiwi/qiwi-invoice-v2?",
  pubgm: "/monetix/payin?",
  trovolive: "/trovo/elixir-payment?",
};

export const REDEEM_CODES = {
  paymentRequest: "/redeem-codes/payment-request?",
};

export const PAYMENTS_LIST = [
  {
    name: PAYMENT_TYPE.binance,
    redirect_link: BROKER_LINKS.binance,
    image: binanceImage,
  },
  {
    name: PAYMENT_TYPE.card,
    redirect_link: BROKER_LINKS.card,
    image: cardImage,
  },
  // {
  //   name: PAYMENT_TYPE.freekassa,
  //   redirect_link: BROKER_LINKS.freekassa,
  //   image: freekassaImage,
  // },
  {
    name: PAYMENT_TYPE.qiwi,
    redirect_link: BROKER_LINKS.qiwi,
    image: qiwiImage,
  },
];

export const PAYMENTS_LIST_TROVO_LIVE = [
  {
    name: PAYMENT_TYPE_BINANCE.qiwi,
    redirect_link: BROKER_LINKS.qiwi,
    image: qiwiImage,
  },
  {
    name: PAYMENT_TYPE_BINANCE.card,
    redirect_link: BROKER_LINKS.card,
    image: cardImage,
  },
  // {
  //   name: PAYMENT_TYPE_BINANCE.binance,
  //   redirect_link: BROKER_LINKS.binance,
  //   image: binanceImage,
  // },
  // {
  //   name: PAYMENT_TYPE.freekassa,
  //   redirect_link: BROKER_LINKS.freekassa,
  //   image: freekassaImage,
  // },
];

export const CURRENCY_TYPE = {
  RUB: "RUB",
  EUR: "EUR",
  USD: "USD",
};

export const otherGames = [
  {
    name: "PUBG UC CODE",
    imgSrc: pubgLogo,
    redirectLink: "pubg-shop",
  },
  {
    name: "TROVO ELIXIRS",
    imgSrc: trovoElixirsMain,
    redirectLink: "trovo-shop",
  },
  {
    name: "UNDAWN",
    imgSrc: undawnMain,
    redirectLink: "undawn-shop",
  },
  {
    name: "ARENA BREAKOUT",
    imgSrc: arenaBreakoutMain,
    redirectLink: "arena-breakout-shop",
  },
];

export const PUBG = {
  gridInfo: {
    title: "PUBG MOBILE",
    cards: pubgCards,
    productType: "pubgm_redeem_code",
  },
  howGameWorks: pubgHowGameWorks,
};

export const ARENA_BREAKOUT = {
  gridInfo: {
    title: "ARENA BREAKOUT",
    cards: arenaBreakoutCards,
  },
  howGameWorks: arenaBreakoutHowGameWorks,
};

export const UNDAWN = {
  gridInfo: {
    title: "UNDAWN",
    cards: undawnCards,
  },
  howGameWorks: undawnHowGameWorks,
};

const constants = {
  elixirCards,
  pubgCards,
  managers,
  otherGames,
  undawnCards,
  arenaBreakoutCards,
};

export default constants;
