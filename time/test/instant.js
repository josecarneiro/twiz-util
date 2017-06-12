/* DEPENDENCIES */
const expect = require('chai').expect;
const Instant = require('./../instant');

/* EASY ID TESTS */
describe('Instant', () => {
  it('should generate now date.', () => {
    let instant = new Instant();
    expect(instant).to.be.an.instanceof(Instant);
    expect(instant.date).to.have.property('year');
    expect(instant.date).to.have.property('month');
    expect(instant.date).to.have.property('day');
    expect(instant.date).to.have.property('hours');
    expect(instant.date).to.have.property('minutes');
    expect(instant.date).to.have.property('seconds');
    expect(instant.date).to.have.property('milliseconds');
  });

  it('should generate date from date object.', () => {
    let instant = new Instant(new Date(2017, 5, 11, 17, 26, 24, 650));
    expect(instant).to.be.an.instanceof(Instant);
    expect(instant.date).to.have.property('year', 2017);
    expect(instant.date).to.have.property('month', 6);
    expect(instant.date).to.have.property('day', 11);
    expect(instant.date).to.have.property('hours', 17);
    expect(instant.date).to.have.property('minutes', 26);
    expect(instant.date).to.have.property('seconds', 24);
    expect(instant.date).to.have.property('milliseconds', 650);
  });

  it('should generate date from object.', () => {
    let instant = new Instant({
      year: 2017,
      month: 5,
      day: 11,
      hours: 17,
      minutes: 26,
      seconds: 24,
      milliseconds: 650
    });
    expect(instant).to.be.an.instanceof(Instant);
    expect(instant.date).to.have.property('year', 2017);
    expect(instant.date).to.have.property('month', 5);
    expect(instant.date).to.have.property('day', 11);
    expect(instant.date).to.have.property('hours', 17);
    expect(instant.date).to.have.property('minutes', 26);
    expect(instant.date).to.have.property('seconds', 24);
    expect(instant.date).to.have.property('milliseconds', 650);
  });

  it('should generate instant and convert to Date object.', () => {
    let instant = new Instant().revert;
    expect(instant).to.be.an.instanceof(Date);
  });

  // console.log(new Instant().date);
  // console.log(new Instant(123).date);
  // console.log(new Instant().revert)
  // console.log(new Instant(new Date()).date);
  // console.log(new Instant().weekday);
  // console.log(new Instant(new Date(2017, 5, 11)).weekday)
  // console.log(new Instant(new Date(2017, 5, 11)).date)
  // console.log(new Instant(new Date(2017, 5, 11, 14)).date)
  // console.log(new Instant(new Date(2017, 5, 11, null, null, 10)).date)
  // console.log(new Instant(new Date().toString()).date);

});
