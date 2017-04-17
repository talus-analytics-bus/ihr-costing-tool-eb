import React from 'react';
import { shallow } from 'enzyme';
import { CapacityTable } from './CapacityTable';

const capacity = {
  columns: [
    'Column 1',
    'Column 2',
  ],
  data: [
    {
      label: 'Column 1',
      columns: [
        'Cell 1',
        'Cell 2',
      ],
    }
  ],
};
let capacityTable;

beforeEach(() => {
  capacityTable = shallow(
    <CapacityTable capacity={capacity} />
  )
});

it('renders column headers', () => {
  expect(capacityTable.find('TableHeaderColumn').length).toEqual(capacity.columns.length + 1);
});

it('renders rows', () => {
  expect(capacityTable.find('TableBody').find('TableRow').length).toEqual(capacity.data.length);
});
