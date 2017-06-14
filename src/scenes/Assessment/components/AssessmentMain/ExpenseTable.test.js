import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseTable } from './ExpenseTable';

let wrapper;
const mockProps = {
  expenses: [
    {expense_id: 'Foo', name: 'foo'},
    {expense_id: 'Foo', name: 'foo'},
    {expense_id: 'Foo', name: 'foo'},
    {expense_id: 'Bar', name: 'bar'},
    {expense_id: 'Baz', name: 'baz'},
    {expense_id: 'Bar', name: 'baz'},
  ],
  geoLevels: {
    'Level 3': {},
  },
};

beforeEach(() => {
  wrapper = shallow(
    <ExpenseTable
      {...mockProps}
    />
  );
});

describe('.expenseGroups()', () => {
  it('should return a list of expenses with unique id\'s', () => {
    const expected = ['Foo', 'Bar', 'Baz'];

    const groups = wrapper.instance().expenseGroups();
    expect(groups.length).toEqual(expected.length);
    groups.forEach((group) => {;
      expect(expected.indexOf(group.id)).toBeGreaterThan(-1);
    });
  });
});
