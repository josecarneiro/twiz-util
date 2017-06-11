'use strict';

/* DEPENDENCIES */
const expect = require('chai').expect;
const Time = require('./../.');

/* EASY ID TESTS */
describe('Time', () => {
  it('should generate now date.', () => {
    let time = new Time();
    expect(time).to.be.an.instanceof(Time);
    expect(time.date).to.have.property('year');
    expect(time.date).to.have.property('month');
    expect(time.date).to.have.property('day');
    expect(time.date).to.have.property('hours');
    expect(time.date).to.have.property('minutes');
    expect(time.date).to.have.property('seconds');
    expect(time.date).to.have.property('milliseconds');
  });

  it('should generate date from date object.', () => {
    let time = new Time(new Date(2017, 5, 11, 17, 26, 24, 650));
    expect(time).to.be.an.instanceof(Time);
    expect(time.date).to.have.property('year', 2017);
    expect(time.date).to.have.property('month', 6);
    expect(time.date).to.have.property('day', 11);
    expect(time.date).to.have.property('hours', 17);
    expect(time.date).to.have.property('minutes', 26);
    expect(time.date).to.have.property('seconds', 24);
    expect(time.date).to.have.property('milliseconds', 650);
  });

  it('should generate date from object.', () => {
    let time = new Time({
      year: 2017,
      month: 5,
      day: 11,
      hours: 17,
      minutes: 26,
      seconds: 24,
      milliseconds: 650
    });
    expect(time).to.be.an.instanceof(Time);
    expect(time.date).to.have.property('year', 2017);
    expect(time.date).to.have.property('month', 5);
    expect(time.date).to.have.property('day', 11);
    expect(time.date).to.have.property('hours', 17);
    expect(time.date).to.have.property('minutes', 26);
    expect(time.date).to.have.property('seconds', 24);
    expect(time.date).to.have.property('milliseconds', 650);
  });

  it('should generate time and convert to Date object.', () => {
    let time = new Time().revert;
    expect(time).to.be.an.instanceof(Date);
  });

  // console.log(new Time().date);
  // console.log(new Time(123).date);
  // console.log(new Time().revert)
  // console.log(new Time(new Date()).date);
  // console.log(new Time().weekday);
  // console.log(new Time(new Date(2017, 5, 11)).weekday)
  // console.log(new Time(new Date(2017, 5, 11)).date)
  // console.log(new Time(new Date(2017, 5, 11, 14)).date)
  // console.log(new Time(new Date(2017, 5, 11, null, null, 10)).date)
  // console.log(new Time(new Date().toString()).date);

});
