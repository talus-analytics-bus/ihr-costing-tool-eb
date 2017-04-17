import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

it('renders home div', () => {
  const home = shallow(
    <Home />
  );
  expect(home.find('.home').length).toEqual(1);
});
