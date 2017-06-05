import {
  getCost
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
