import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

it('renders enter button', () => {
  const home = shallow(
    <Home />
  );
  const enterButton = home.find('RaisedButton');

  expect(enterButton).toBeDefined();
});
