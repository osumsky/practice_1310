class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  get from() {
    return this._from;
  }

  set from(from) {
    if (typeof from !== 'number') {
      throw new TypeError('"From" must be a number');
    }
    if (from > this._to) {
      throw new RangeError('"From" must be <= "to"');
    }
    this._from = from;
  }

  get to() {
    return this._to;
  }

  set to(to) {
    if (typeof to !== 'number') {
      throw new TypeError('"To" must be a number');
    }
    if (to < this._from) {
      throw new RangeError('"To" must be >= "from"');
    }
    this._to = to;
  }

  range() {
    return [this._from, this._to];
  }

  validate(number) {
    if (number >= this._from && number <= this._to) {
      return number;
    }
    throw new RangeError();
  }
}

const val = new RangeValidator(0, 100);
console.log(val.range());
console.log(val.validate(21));