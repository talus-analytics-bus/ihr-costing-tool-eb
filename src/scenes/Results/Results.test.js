import React from 'react';
import { shallow } from 'enzyme';
import { Results } from './Results';

it('renders results div', () => {
  const results = shallow(
    <Results />
  );
  expect(results.find('.results').length).toEqual(1);
});
