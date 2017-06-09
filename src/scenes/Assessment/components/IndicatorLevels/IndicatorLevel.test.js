import React from 'react';
import { shallow } from 'enzyme';
import { IndicatorLevel } from './IndicatorLevel';

let wrapper;
const props = {
  label: 'Foo',
  index: 1
};

beforeEach(() => {
  wrapper = shallow(
    <IndicatorLevel
      {...props}
    />
  );
});

describe('render', () => {
  it('should render a Chip component', () => {
    const chip = wrapper.find('Chip');

    expect(chip).toBeDefined();
    expect(chip.length).toEqual(1);
  });

  it('should display index in Avatar component', () => {
    const avatar = wrapper.find('Avatar');

    expect(avatar).toBeDefined();
  });

  it('should display label', () => {
    expect(wrapper.find(props.label)).toBeDefined();
  });
});
