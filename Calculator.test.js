const calculator = require('./Calculator.js');

describe('Addition', () => {
  test('3 + 5 = 8', () => {
    expect(calculator.add(3, 5)).toBe(8);
  });
});