import React from 'react';
import { CapacityTableHeaderCell } from './CapacityTableHeaderCell';
import { shallow } from 'enzyme';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <CapacityTableHeaderCell/>
  );
});

describe('.isActive()', () => {
  it('should default to true', () => {
    expect(wrapper.instance().isActive()).toBeTruthy();
  });

  it('should reflect the active props passed', () => {
    wrapper= shallow(
      <CapacityTableHeaderCell
        active={true}
      />
    );
    expect(wrapper.instance().isActive()).toBeTruthy();

    wrapper= shallow(
      <CapacityTableHeaderCell
        active={false}
      />
    );
    expect(wrapper.instance().isActive()).toBeFalsy();
  });
});
