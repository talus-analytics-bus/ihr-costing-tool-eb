import React, { Component } from 'react';
import styles from './IndicatorLevels.scss';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

export class IndicatorLevel extends Component {
  render() {
    return (
      <Chip
        className={styles.indicatorLevel}
      >
        <Avatar>{this.props.index}</Avatar>
        {this.props.label}
      </Chip>
    );
  }
}
