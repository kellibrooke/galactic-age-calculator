import { Calculator } from './../src/calculator.js'

describe('Calculator', function() {

  it('should assign a birthday and todays date to a new calculator', function() {
    var newCalculator = new Calculator(25, 7, 1987);
    expect(newCalculator.printableBirthDate).toEqual("Tue Aug 25 1987");
    expect(newCalculator.printableToday).toEqual("Fri Aug 03 2018");
  });

  it('should assign a birthday and todays date to a new calculator', function() {
    var newCalculator = new Calculator(25, 7, 1987);
    var seconds = newCalculator.convertToSeconds(newCalculator.birthDate);
    expect(seconds).toEqual(556873200);
  });

});
