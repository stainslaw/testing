import reverseStr from '../script/reverseString';

test('Returns string reversed', () => {
  expect(reverseStr('foo')).toMatch('oof');
});