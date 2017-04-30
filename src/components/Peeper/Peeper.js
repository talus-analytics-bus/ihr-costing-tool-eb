import React, { Component } from 'react';

import AVPlayArrow from 'material-ui/svg-icons/av/play-arrow';
import styles from './Peeper.css';

export class Peeper extends Component {
  render() {
    return (
      <div
        className={`${styles.peeper} ${this.props.show ? styles.peeperActive: null}`}
        onClick={this.props.togglePeeper}
      >
        <div
          className={styles.peeperLabel}
        >
          <AVPlayArrow/>
          <strong>{this.props.label}</strong>
        </div>
        <div className={styles.peeperContent}>
        {this.props.children}
        </div>
      </div>
    );
  }
}
