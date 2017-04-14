import React from 'react';
import {shallow} from 'enzyme';
import {Sidebar} from './Sidebar';

it('renders without crashing', () => {
  const sidebar = shallow(
    <Sidebar />
  );
  expect(sidebar.find('.sidebar').length).toEqual(1);
});

it('renders the correct number of list groups', () => {
  const testContents = [
    {label: 'Test'},
    {label: 'Another'},
  ];
  const sidebar = shallow(
    <Sidebar contents={testContents} />
  );

  expect(sidebar.find('ListGroup').length).toEqual(testContents.length);
});

it('renders the correct number of dividers', () => {
  const testContents = [
    {label: 'Test'},
    {label: 'Another'},
  ];
  const sidebar = shallow(
    <Sidebar contents={testContents} />
  );

  expect(sidebar.find('Divider').length).toEqual(testContents.length - 1);
});
