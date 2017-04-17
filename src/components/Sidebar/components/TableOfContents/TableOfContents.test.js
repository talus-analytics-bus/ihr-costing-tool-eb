import React from 'react';
import { shallow } from 'enzyme';
import { TableOfContents } from './TableOfContents';

it('renders the correct number of list groups', () => {
  const testContents = [
    {label: 'Test'},
    {label: 'Another'},
  ];
  const tableOfContents = shallow(
    <TableOfContents contents={testContents} />
  );

  expect(tableOfContents.find('ListGroup').length).toEqual(testContents.length);
});

it('renders the correct number of dividers', () => {
  const testContents = [
    {label: 'Test'},
    {label: 'Another'},
  ];
  const tableOfContents = shallow(
    <TableOfContents contents={testContents} />
  );

  expect(tableOfContents.find('Divider').length).toEqual(testContents.length - 1);
});
