import React from 'react';
import { shallow } from 'enzyme';
import { Costing } from './Costing';

it('renders sidebar', () => {
  const costing = shallow(
    <Costing />
  );
  expect(costing.find('Sidebar').length).toEqual(1);
});
