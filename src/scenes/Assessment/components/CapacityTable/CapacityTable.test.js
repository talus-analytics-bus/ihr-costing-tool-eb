import React from 'react';
import { CapacityTable } from './CapacityTable';
import { shallow } from 'enzyme';

let wrapper;
const mockCapacity = {
  indicators: [],
};
const mockCountry = {
  details: {},
};
const mockSetCountryLevel = jest.fn();

beforeEach(() => {
  wrapper = shallow(
    <CapacityTable
      activeCapacity={mockCapacity}
      setActiveCapacityLevel={mockSetCountryLevel}
      activeCountry={mockCountry}
    />
  );
});

it('renders the table container div', () => {
  expect(wrapper.find('capacityTableContents')).toBeDefined();
});

it('renders the capacity table', () => {
  expect(wrapper.find('capacityTable')).toBeDefined();
});
