export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val === "number") {
      this._code = val;
    }
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val === "string") {
      this._name = val;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})}`;
  }
}
