const someOperations = require('./functions');

test('a number is pair', () => {
  expect(someOperations.isPair(2)).toBe(true);
});

test('a number is not pair', () => {
  expect(someOperations.isPair(3)).toBe(false);
});

test('an array is paired', () => {
  expect(someOperations.arrayIsPaired([2, 4, 6])).toBe(true);
});

test('an array is not paired', () => {
  expect(someOperations.arrayIsPaired([2, 4, 5])).toBe(false);
});

test('the length of a javascript string is 10', () => {
  expect(someOperations.stringLength('javascript')).toBe(10);
});

test ('the day of the week for 1 is Sunday', () => {
  expect(someOperations.dayOfWeek(0)).toBe('Sunday');
});

test('the day of the week for 7 is Saturday', () => {
  expect(someOperations.dayOfWeek(6)).toBe('Saturday');
});

test('the current time is between 6 and 18', () => {
  expect(someOperations.currenTime()).toBeGreaterThanOrEqual(0);
  expect(someOperations.currenTime()).toBeLessThanOrEqual(24);
});

test('the order of the numbers in an array is [1, 2, 3, 4, 5, 6, 7]', () => {
  expect(someOperations.orderNumbersOfArray([7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7]);
} );

test('the upcase of a word is JAVASCRIPT', () => {
  expect(someOperations.upcaseWord('javascript')).toBe('JAVASCRIPT');
});
