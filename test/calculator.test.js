import { add, subtract, multiply, divide } from '../script/calculator';

test('Adds 3 + 3 to equal 6', () => {
  expect(add(3, 3)).toEqual(6);
});

test('Subtracts 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toEqual(1);
});

test('Multplies 4 * 4 to equal 16', () => {
  expect(multiply(4, 4)).toEqual(16);
})

test('Divides 6 / 2 to equal 3', () => {
    expect(divide(6, 2)).toEqual(3);
  });