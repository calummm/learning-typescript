import {
  myArray,
  myBoolean,
  myFunction,
  myNumber,
  myObject,
  myString,
} from './1';

test('variable type to be a number', () => {
  expect(typeof myNumber).toBe('number');
});

test('variable type to be a string', () => {
  expect(typeof myString).toBe('string');
});

test('variable type to be a boolean', () => {
  expect(typeof myBoolean).toBe('boolean');
});

test('variable type to be an array', () => {
  expect(Array.isArray(myArray)).toBe(true);
});

test('variable type to be an object', () => {
  expect(typeof myObject).toBe('object');
});

test('variable type to be a function', () => {
  expect(typeof myFunction).toBe('function');
});
