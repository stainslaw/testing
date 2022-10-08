import capitalise from '../script/capitalise';

test('Returns string with the first character capitalised', () => {
  expect(capitalise('stainslaw')).toBe('Stainslaw');
});