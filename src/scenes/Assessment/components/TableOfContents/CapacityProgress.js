import React, { Component } from 'react';

import styles from './TableOfContents.css';


export class CapacityProgress extends Component {
  getNumCompleted = () => {
    let numCompleted = 0;
    this.props.entries.forEach((indicator) => {
      numCompleted += indicator.capacities.filter(c => c.completed).length;
    });
    return numCompleted;
  }

  getNumCapacities = () => {
    let numCapacities = 0;
    this.props.entries.forEach((indicator) => {
      numCapacities += indicator.capacities.length;
    });
    return numCapacities;
  }

  render() {
    return (
      <div className={styles.capacityProgress}>
        <div className={styles.capacityProgressText}>
          {`${this.getNumCompleted()} of ${this.getNumCapacities()} capacities completed`}
        </div>
      </div>
    )
  }
}
