import oneElixir from "../assets/elixirs/1Elixir.png";
import oneHundredElixirs from "../assets/elixirs/100Elixirs.png";
import fiveHundredElixirs from "../assets/elixirs/500-1000Elixirs.png";
import twoThousandElixirs from "../assets/elixirs/2000Elixirs.png";
import fiveThousandElixirs from "../assets/elixirs/5000-10000Elixirs.png";
import twentyFiveThousandElixirs from "../assets/elixirs/25000-50000Elixirs.png";
import oneHundredThousandElixirs from "../assets/elixirs/100000-250000Elixirs.png";
import fiveHundredThousandElixirs from "../assets/elixirs/500000Elixirs.png";

const elixirCards = [
  {
    value: 1,
    title: "1 Elixir",
    text: "1 Elixir",
    cost: "9.29 ₽",
    src: oneElixir,
  },
  {
    value: 100,
    title: "100 Elixirs",
    text: "100 Elixirs",
    cost: "92.9 ₽",
    src: oneHundredElixirs,
  },
  {
    value: 500,
    title: "500 Elixirs",
    text: "500 Elixirs",
    cost: "465 ₽",
    src: fiveHundredElixirs,
  },
  {
    value: 1000,
    title: "1000 Elixirs + 10 FREE",
    text: "1010 Elixirs",
    cost: "929 ₽",
    src: fiveHundredElixirs,
  },
  {
    value: 2000,
    title: "2000 Elixirs + 20 FREE",
    text: "2020 Elixirs",
    cost: "1860 ₽",
    src: twoThousandElixirs,
  },
  {
    value: 5000,
    title: "5000 Elixirs + 100 FREE",
    text: "5100 Elixirs",
    cost: "4640 ₽",
    src: fiveThousandElixirs,
  },
  {
    value: 10000,
    title: "10000 Elixirs + 300 FREE",
    text: "10300 Elixirs",
    cost: "9290 ₽",
    src: fiveThousandElixirs,
  },
  {
    value: 25000,
    title: "25000 Elixirs + 1000 FREE",
    text: "26000 Elixirs",
    cost: "23220 ₽",
    src: twentyFiveThousandElixirs,
  },
  {
    value: 50000,
    title: "50000 Elixirs + 2000 FREE",
    text: "52000 Elixirs",
    cost: "46450 ₽",
    src: twentyFiveThousandElixirs,
  },
  {
    value: 100000,
    title: "100000 Elixirs + 5000 FREE",
    text: "105000 Elixirs",
    cost: "92900 ₽",
    src: oneHundredThousandElixirs,
  },
  {
    value: 250000,
    title: "250000 Elixirs + 12500 FREE",
    text: "262500 Elixirs",
    cost: "232250 ₽",
    src: oneHundredThousandElixirs,
  },
  {
    value: 500000,
    title: "500000 Elixirs + 25000 FREE",
    text: "525000 Elixirs",
    cost: "464500 ₽",
    src: fiveHundredThousandElixirs,
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

export const BROKER_TYPE = {
  binance: "binance",
  card: "card",
  freekassa: "freekassa",
  qiwi: "qiwi",
};

export const BROKER_LINKS = {
  binance: "https://backend.aqua-creative.co/monetix/payin/binance?",
  card: "https://backend.aqua-creative.co/monetix/payin/card?",
  freekassa: "https://backend.aqua-creative.co/free-kassa/payin?",
  qiwi: "https://backend.aqua-creative.co/qiwi/qiwi-invoice-v2?",
};

export const CURRENCY_TYPE = {
  RUB: "RUB",
  EUR: "EUR",
  USD: "USD",
};

const constants = {
  elixirCards,
  managers,
};

export default constants;
