import { bike, car, vehicle } from './3';

test('instance of vehicle exists', () => {
  expect(vehicle).toBeDefined();
});

test('vehice has a number of wheels', () => {
  expect(vehicle.wheels).toBeDefined();
  expect(vehicle.wheels).toBeTruthy();
  expect(typeof vehicle.wheels).toBe('number');
});

test('instance of car exists', () => {
  expect(car).toBeDefined();
});

test('car has 4 wheels', () => {
  expect(car.wheels).toBeDefined();
  expect(car.wheels).toBe(4);
});

test('instance of bike exists', () => {
  expect(bike).toBeDefined();
});

test('car has 4 wheels', () => {
  expect(bike.wheels).toBeDefined();
  expect(bike.wheels).toBe(2);
});
