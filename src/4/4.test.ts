import {
  aCalledFunction,
  addTwoNumbersAndReturn,
  aRecursiveProblem,
  sayHello,
  sayHelloWithArrowSyntax,
  sayHelloWithName,
  sayHelloWithOptionalName,
} from './4';

describe('sayHello', () => {
  it('should exist', () => {
    expect(sayHello).toBeDefined();
  });
  it('should be a function', () => {
    expect(typeof sayHello).toBe('function');
  });
  it('should output "Hello"', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sayHello();
    expect(consoleSpy).toHaveBeenCalledWith('Hello');
    consoleSpy.mockRestore();
  });
});

describe('sayHelloWithArrowSyntax', () => {
  it('should exist', () => {
    expect(sayHelloWithArrowSyntax).toBeDefined();
  });
  it('should be a function', () => {
    expect(typeof sayHelloWithArrowSyntax).toBe('function');
  });
  it('should output "Hello"', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sayHelloWithArrowSyntax();
    expect(consoleSpy).toHaveBeenCalledWith('Hello');
    consoleSpy.mockRestore();
  });
});

describe('sayHelloWithName', () => {
  it('should exist', () => {
    expect(sayHelloWithName).toBeDefined();
  });
  it('should be a function', () => {
    expect(typeof sayHelloWithName).toBe('function');
  });
  it('should output "Hello Bob"', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sayHelloWithName('Bob');
    expect(consoleSpy).toHaveBeenCalledWith('Hello Bob');
    consoleSpy.mockRestore();
  });

  it('should output "Hello Jen"', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sayHelloWithName('Jen');
    expect(consoleSpy).toHaveBeenCalledWith('Hello Jen');
    consoleSpy.mockRestore();
  });
});

describe('sayHelloWithOptionalName', () => {
  it('should exist', () => {
    expect(sayHelloWithOptionalName).toBeDefined();
  });
  it('should be a function', () => {
    expect(typeof sayHelloWithOptionalName).toBe('function');
  });
  it('should output "Hello" when no name provided', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sayHelloWithOptionalName();
    expect(consoleSpy).toHaveBeenCalledWith('Hello');
    consoleSpy.mockRestore();
  });
  it('should output "Hello Jen" when provided', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    sayHelloWithOptionalName('Jen');
    expect(consoleSpy).toHaveBeenCalledWith('Hello Jen');
    consoleSpy.mockRestore();
  });
});

describe('addTwoNumbersAndReturn', () => {
  it('should exist', () => {
    expect(addTwoNumbersAndReturn).toBeDefined();
  });
  it('should be a function', () => {
    expect(typeof addTwoNumbersAndReturn).toBe('function');
  });
  it('should output numbers added together correctly', () => {
    expect(addTwoNumbersAndReturn(2, 5)).toBe(7);
  });
});

describe('aRecursiveProblem', () => {
  it('should exist', () => {
    expect(aRecursiveProblem).toBeDefined();
  });
  it('should be a function', () => {
    expect(typeof aRecursiveProblem).toBe('function');
  });
  it('should output 5, 4, 3, 2, 1, 0', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    aRecursiveProblem(5);
    expect(consoleSpy).toBeCalledTimes(6);
    expect(consoleSpy).toBeCalledWith(5);
    expect(consoleSpy).toBeCalledWith(4);
    expect(consoleSpy).toBeCalledWith(3);
    expect(consoleSpy).toBeCalledWith(2);
    expect(consoleSpy).toBeCalledWith(1);
    expect(consoleSpy).toBeCalledWith(0);
    consoleSpy.mockRestore();
  });
});

describe('aCalledFunction', () => {
  it('should exist', () => {
    expect(aCalledFunction).toBeDefined();
  });
  it('should be a function', () => {
    expect(typeof aCalledFunction).toBe('function');
  });
  it('should call a provided function', () => {
    const innerFn = jest.fn(() => 5);
    aCalledFunction(innerFn);
    expect(innerFn).toBeCalledTimes(1);
  });
});
