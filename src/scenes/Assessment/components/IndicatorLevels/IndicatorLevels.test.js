import React from 'react';
import { shallow } from 'enzyme';
import { IndicatorLevels } from './IndicatorLevels';

let wrapper;
const indicator = {
  selectedLevel: 0,
};

beforeEach(() => {
  wrapper = shallow(
    <IndicatorLevels
      indicator={indicator}
    />
  );
});

describe('.getLevels()', () => {
  let levels;
  beforeEach(() => {
    levels = wrapper.instance().getLevels();
  });

  describe('labels', () => {});
  describe('index', () => {
    it('should return correct value for selected index', () => {
      const expected = indicator.selectedLevel;

      expect(levels.selected.index).toEqual(expected);
    });

    it('should return target index to be one more than selected index if within acceptable range', () => {
      const expected = indicator.selectedLevel + 1;

      expect(levels.target.index).toEqual(expected);
    });

    it('should not exceed the maximum allowed value for target', () => {
      const expected = 4;
      const maxIndicator = {
        selectedLevel: 4,
      }

      wrapper = shallow(
        <IndicatorLevels
          indicator={maxIndicator}
        />
      );
      levels = wrapper.instance().getLevels();

      expect(levels.target.index).toEqual(expected);
    });
  });
});

describe('render', () => {
  it('should render two indicator levels', () => {
    const expected = 2;

    expect(wrapper.find('IndicatorLevel').length).toEqual(expected);
  });
});
