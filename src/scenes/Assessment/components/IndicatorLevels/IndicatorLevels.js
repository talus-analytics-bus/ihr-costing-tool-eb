import React, { Component } from 'react';
import {
  levels,
  getSelectedLevelIndex,
  getTargetLevelIndex,
} from '../../../../lib/capacities';
import styles from './IndicatorLevels.scss';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

export class IndicatorLevels extends Component {
  getLevels = () => {
    const selectedLevelIndex = getSelectedLevelIndex(this.props.indicator.selectedLevel);
    // target level is 1 more than selected level
    const targetLevelIndex = getTargetLevelIndex(this.props.indicator.selectedLevel);

    return {
      selected: {
        label: `Current Capacity ${levels[selectedLevelIndex]}`,
        index: selectedLevelIndex,
      },
      target: {
        label: `Target Capacity ${levels[targetLevelIndex]}`,
        index: targetLevelIndex,
      },
    }
  }

  render() {
    const levels = this.getLevels();

    return (
      <div className={styles.indicatorLevels}>
        <Chip
          className={styles.indicatorLevel}
        >
          <Avatar>{levels.selected.index}</Avatar>
          {levels.selected.label}
        </Chip>
        <Chip
          className={styles.indicatorLevel}
        >
          <Avatar>{levels.target.index}</Avatar>
          {levels.target.label}
        </Chip>
      </div>
    );
  }
}
