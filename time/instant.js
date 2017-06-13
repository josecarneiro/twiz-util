const util = require('./util');

const version = require('./package').version;

module.exports = class Instant {
  constructor () {
    this.version = version;
    this.name = 'Instant';
    this._date = {};
    // IF NO ARGUMENTS GIVEN,
    // INITIATE TIME OBJECT WITH PRESENT MOMENT
    /* eslint brace-style: 0 */
    if (!arguments.length) {
      let now = new Date(Date.now());
      this.date = this.convert(now);
    }
    // IF NO ARGUMENT IS NUMBER,
    // ASSUME IT'S THE NUMBER OF MILISECONDS SINCE THE EPOCH
    else if (arguments.length === 1 && typeof arguments[0] === 'number') {
      this.date = this.convert(new Date(arguments[0]));
    }
    // IF ARGUMENT IS A DATE OBJECT,
    // CONVERT THAT DATE OBJECT
    else if (arguments.length === 1 && arguments[0] instanceof Date) {
      this.date = this.convert(arguments[0]);
    }
    // IF ARGUMENT IS STRING
    else if (arguments.length === 1 && typeof arguments[0] === 'string') {
      this.date = this.convert(new Date(Date.parse(arguments[0])));
    }
    // IF ARGUMENT IS OBJECT
    else if (arguments.length === 1 && typeof arguments[0] === 'object') {
      this.date = util.destructure(arguments[0]);
    }
    // IF NONE OF THE ABOVE CONDITIONS IS MET,
    // THROW ERROR
    else {
      throw new Error('Unexpected arguments.');
    }
  }

  // SETS DATE OBJECT
  set date (date) {
    // SIMPLIFY DATE OBJECT
    if (!date.milliseconds) {
      delete date.milliseconds;
      if (!date.seconds) {
        delete date.seconds;
        if (!date.minutes && !date.hours) {
          delete date.minutes;
          delete date.hours;
          if (!date.day) {
            delete date.day;
          }
        }
      }
    }
    this._date = date;
  }

  // RETURNS FULL DATE
  get date () {
    return this._date;
  }

  get weekday () {
    // WEEKDAYS ARE RANGE FROM 1 TO 7,
    // START ON MONDAY AND END ON SUNDAY
    return this.revert.getDay() ? this.revert.getDay() - 1 : 6;
  }

  /* eslint no-unused-vars: 0 */
  convert (date, options) {
    if (!(date instanceof Date)) throw new Error('Convert method should take in a Date object.');
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      milliseconds: date.getMilliseconds()
    };
  }

  get revert () {
    let array = [
      this._date.year || 2000,
      this._date.month - 1 || 0,
      this._date.day || 1,
      this._date.hours || 0,
      this._date.minutes || 0,
      this._date.seconds || 0,
      this._date.miliseconds || 0
    ];
    return new Date(...array);
  }

  toJSON () {
    return this._date;
  }
};
