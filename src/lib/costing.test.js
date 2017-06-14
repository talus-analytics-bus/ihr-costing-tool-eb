import {
  getCost,
  getConvertedCost,
} from './costing';

describe('.getCost()', () => {

  let state;

  beforeEach(() => {
    state = {
      cost: 2,
      duration: 3,
      staff: 4,
      area: 5,
      population: 6,
      facility: 7,
    };
  });

  it('should return product of all present multipliers', () => {
    const expected = state.cost * state.duration * state.staff * state.area * state.population * state.facility;

    expect(getCost(state)).toEqual(expected);
  });

});

describe('.getConvertedCost', () => {
  it('should return converted cost in two decimal places', () => {
    const cost = 123;
    const currency = {
      details: {
        exchange_rates: [
          {multiplier: 0.122}
        ]
      }
    };
    const expected = 15.01;

    expect(getConvertedCost(cost, currency)).toEqual(expected.toString());
  });
});
