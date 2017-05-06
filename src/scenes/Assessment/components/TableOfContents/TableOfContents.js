import React, { Component } from 'react';

import styles from './TableOfContents.css';

class Capacity extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={`${styles.capacity} ${this.props.active.capacity === this.props.capacityIndex && this.props.active.core === this.props.coreIndex ? styles.activeCapacity : null}`}>
        <p>{this.props.capacity.name}</p>
        <ul>
          <li>
            Self-assessment
          </li>
          <li>
            Costing
          </li>
        </ul>
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
            <Capacity capacity={capacity} key={index} active={this.props.active} coreIndex={this.props.coreIndex} capacityIndex={index}/>
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
          <IndicatorGroup indicator={indicator} key={index} active={this.props.active} coreIndex={index}/>
        )
      }
      </div>
    )
  }
}
