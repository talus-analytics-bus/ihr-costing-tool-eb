import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from './Sidebar';

let sidebar;

beforeEach(() => {
  sidebar = shallow(
    <Sidebar />
  );
});

it('renders table of contents component', () => {
  expect(sidebar.find('TableOfContents')).toBeDefined();
});

it('renders progress component', () => {
  expect(sidebar.find('Progress')).toBeDefined();
});
