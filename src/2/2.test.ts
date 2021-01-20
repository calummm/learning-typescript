import {
  allBut5Array,
  aSimpleObject,
  evenNumberArray,
  normalArray,
  oddNumberArray,
} from './2';

test('normalArray', () => {
  expect(normalArray).toStrictEqual([0, 1, 2, 3, 4, 5]);
});

test('evenNumberArray', () => {
  expect(evenNumberArray).toStrictEqual([2, 4, 6, 8, 10]);
});

test('oddNumberArray', () => {
  expect(oddNumberArray).toStrictEqual([1, 3, 5, 7, 9]);
});

test('allBut5Array', () => {
  expect(allBut5Array).toStrictEqual([0, 1, 2, 3, 4, 6, 7, 8, 9]);
});

test('aSimpleObject', () => {
  expect(aSimpleObject).toBeDefined();
  expect(typeof aSimpleObject).toBe('object');
  expect((aSimpleObject as any)?.greeting).toBeDefined();
  expect(typeof (aSimpleObject as any)?.greeting).toBe('string');
  expect((aSimpleObject as any)?.greeting?.length).toBeGreaterThan(0);
});
