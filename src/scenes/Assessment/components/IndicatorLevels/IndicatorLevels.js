import React, { Component } from 'react';
import {
  levels as capacityLevels,
  getSelectedLevelIndex,
  getTargetLevelIndex,
} from '../../../../lib/capacities';
import styles from './IndicatorLevels.scss';
import { IndicatorLevel } from './IndicatorLevel';

export class IndicatorLevels extends Component {
  getLevels = () => {
    const selectedLevelIndex = getSelectedLevelIndex(this.props.indicator.selectedLevel);
    // target level is 1 more than selected level
    const targetLevelIndex = getTargetLevelIndex(this.props.indicator.selectedLevel);

    return {
      selected: {
        label: `Current Capacity: ${capacityLevels[selectedLevelIndex]}`,
        index: selectedLevelIndex,
      },
      target: {
        label: `Target Capacity: ${capacityLevels[targetLevelIndex]}`,
        index: targetLevelIndex,
      },
    }
  }

  render() {
    const levels = this.getLevels();
    const keys = ['selected', 'target'];

    return (
      <div className={styles.indicatorLevels}>
        {
          keys.map((key) =>
          <IndicatorLevel
            key={key}
            {...levels[key]}
          />
          )
        }
      </div>
    );
  }
}
