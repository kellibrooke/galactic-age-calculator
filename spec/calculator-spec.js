import { Calculator } from './../src/calculator.js'

describe('Calculator', function() {

  it('should assign a birthday to a calculator', function() {
    var newCalculator = new Calculator(25, 8, 1987);
    expect(newCalculator.birthDay).toEqual(25);
  });

});
