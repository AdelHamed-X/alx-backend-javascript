/* eslint-disable */
import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof val === "number") {
      this._amount = val;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (val instanceof Currency) {
      this._currency = val;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, converionRate) {
    return amount * converionRate;
  }
}
