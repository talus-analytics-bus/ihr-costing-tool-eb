import React from 'react';
import { shallow } from 'enzyme';
import { Costing } from './Costing';

it('renders costing div', () => {
  const costing = shallow(
    <Costing />
  );
  expect(costing.find('.costing').length).toEqual(1);
});
