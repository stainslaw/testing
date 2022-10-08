import caesarCipher from '../script/caesarCipher';

test('Wraps from z to a', () => {
  expect(caesarCipher('Z', 6)).toMatch('F');
});

test('Works with different cases', () => {
  expect(caesarCipher('stainslaw', 5)).toEqual('xyfnsxqfb');
});

test('Works with punctuation', () => {
  expect(caesarCipher('Hello, World!', 2)).toEqual('Jgnnq, Yqtnf!');
});