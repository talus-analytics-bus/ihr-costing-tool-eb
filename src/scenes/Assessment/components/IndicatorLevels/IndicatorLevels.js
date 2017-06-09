import React, { Component } from 'react';
import { capacityLevels } from '../../Assessment';
import styles from './IndicatorLevels.scss';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

export class IndicatorLevels extends Component {
  getLevels = () => {
    const selectedLevelIndex = this.props.indicator.selectedLevel || 0;
    // target level is 1 more than selected level
    const targetLevelIndex = Math.min(selectedLevelIndex + 1, 4);

    return {
      selected: {
        label: `Current Capacity ${capacityLevels[selectedLevelIndex]}`,
        index: selectedLevelIndex,
      },
      target: {
        label: `Target Capacity ${capacityLevels[targetLevelIndex]}`,
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
