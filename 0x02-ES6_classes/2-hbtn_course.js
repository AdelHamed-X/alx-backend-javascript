import { error } from "console";
import { string } from "yargs";

export default class HolbertonSchool {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(val) {
    if (typeof val === "string") {
      this._name = val;
    } else {
      throw error('Type of "name" must be a string!');
    }
  }

  get name() {
    return this._name;
  }

  set length(val) {
    if (typeof val === "number") {
      this._length = val;
    } else {
      throw error('Type of "length" must be a number!');
    }
  }

  get length() {
    return this._length;
  }

  set students(val) {
    if (!Array.isArray(val) || val.every((elem) => typeof elem != "string")) {
      throw error("Type of students must be Array of strings!");
    } else {
      this._students = val;
    }
  }

  get students() {
    return this._students;
  }
}
