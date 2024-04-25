export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val === "string") {
      this._code = val;
    } else {
      throw error("Type of code must be a string!");
    }
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val === "string") {
      this._name = val;
    } else {
      throw error("Type of name must be a string!");
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})}`;
  }
}
