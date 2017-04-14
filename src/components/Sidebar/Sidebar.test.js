import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from './Sidebar';

it('renders without crashing', () => {
  const sidebar = shallow(
    <Sidebar />
  );
  expect(sidebar.find('.sidebar').length).toEqual(1);
});
