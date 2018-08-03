describe('Calculator', function() {
  let calculator;
  let date;

  beforeEach(function() {
    calculator = new Calculator(birthday);
    date = new Date();
  });

  it('should test whether a calculator is instantiated with properties', function() {

    expect(game.currentEnemy).toEqual({});
  });
