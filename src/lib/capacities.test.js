import {
  levels,
  getSelectedLevelIndex,
  getTargetLevelIndex,
} from './capacities';

describe('levels', () => {
  it('should have 5 elements', () => {
    expect(levels.length).toEqual(5);
  });
});

describe('.getSelectedLevelIndex()', () => {
  it('should return arg as number', () => {
    const expected = 1;
    const testValues = [1, "1"];

    testValues.forEach((testValue) => {
      expect(getSelectedLevelIndex(testValue)).toEqual(expected);
    });
  });

  it('should return default value of 0 for falsy values', () => {
    const expected = 0;
    const testValues = [null, NaN, undefined];

    testValues.forEach((testValue) => {
      expect(getSelectedLevelIndex(testValue)).toEqual(expected);
    });
  });
});

describe('.getTargetLevelIndex()', () => {
  it('should return selected value index incremented by one', () => {
    const expected = 2;

    expect(getTargetLevelIndex(1)).toEqual(expected);
  });

  it('should not exceed max value of 4', () => {
    const expected = 4;

    expect(getTargetLevelIndex(4)).toEqual(expected);
  });
});
