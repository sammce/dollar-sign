const currencies = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  AUD: "$",
  CAD: "$",
  CHF: "Fr",
  CNY: "¥",
  HKD: "$",
  IDR: "Rp",
  ILS: "₪",
  INR: "₹",
  JPY: "¥",
  KRW: "₩",
};

export type Currency = keyof typeof currencies;

export default currencies;
