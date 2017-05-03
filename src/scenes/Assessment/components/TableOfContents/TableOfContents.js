import React, { Component } from 'react';

import styles from './TableOfContents.css';

class Capacity extends Component {
  render() {
    return (
      <div className={`${styles.capacity} ${this.props.capacity.active ? styles.activeCapacity : null}`}>
        {this.props.capacity.name}
      </div>
    )
  }
}

class IndicatorGroup extends Component {
  render() {
    return (
      <div className={styles.indicatorGroup}>
        <div className={styles.indicatorTitle}>
          {this.props.indicator.name}
        </div>
        <div className={`${styles.capacities} ${this.props.indicator.capacities.length === 0 ? styles.capacitiesEmpty: null}`}>
        {
          this.props.indicator.capacities.map((capacity, index) =>
            <Capacity capacity={capacity} key={index}/>
          )
        }
        </div>
      </div>
    )
  }
}

export class TableOfContents extends Component {
  render() {
    return (
      <div className={styles.tableOfContents}>
      {
        this.props.entries.map((indicator, index) =>
          <IndicatorGroup indicator={indicator} key={index}/>
        )
      }
      </div>
    )
  }
}
