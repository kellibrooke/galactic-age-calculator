import { Calculator } from './../src/calculator.js'

describe('Calculator', function() {

  it('should assign a birthday and todays date to a new calculator', function() {
    var newCalculator = new Calculator(25, 7, 1987);
    expect(newCalculator.printableBirthDate).toEqual("Tue Aug 25 1987");
    expect(newCalculator.printableToday).toEqual("Fri Aug 03 2018");
  });

  it('should convert a date to seconds', function() {
    var newCalculator = new Calculator(25, 7, 1987);
    var seconds = newCalculator.convertToSeconds(newCalculator.birthDate);
    expect(seconds).toEqual(556873200);
  });

  it('should find the difference in seconds between two dates', function() {
    var newCalculator = new Calculator(25, 7, 1987);
    var difference = newCalculator.findSecondsBetweenDates();
    expect(difference).toEqual(976406400);
  });

  it('should find the persons earth age', function() {
    var newCalculator = new Calculator(25, 7, 1987);
    var earthAge = newCalculator.findEarthAge();
    expect(earthAge).toEqual(30);
  });

  it('should find the persons mercury age', function() {
    var newCalculator = new Calculator(25, 7, 1987);
    var mercuryAge = newCalculator.findMercuryAge();
    expect(mercuryAge).toEqual(129);
  });

  it('should find the persons venus age', function() {
    var newCalculator = new Calculator(25, 7, 1987);
    var venusAge = newCalculator.findVenusAge();
    expect(venusAge).toEqual(49);
  });

  it('should find the persons mars age', function() {
    var newCalculator = new Calculator(25, 7, 1987);
    var marsAge = newCalculator.findMarsAge();
    expect(marsAge).toEqual(16);
  });
  
  it('should find the persons jupiter age', function() {
    var newCalculator = new Calculator(25, 7, 1987);
    var jupiterAge = newCalculator.findJupiterAge();
    expect(jupiterAge).toEqual(2);
  });

});
