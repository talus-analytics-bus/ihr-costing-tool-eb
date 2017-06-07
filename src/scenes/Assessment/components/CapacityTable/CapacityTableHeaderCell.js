import React, { Component } from 'react';
import styles from './CapacityTable.scss';

export class CapacityTableHeaderCell extends Component {
  isActive = () => this.props.hasOwnProperty('active') ? this.props.active : true;

  activeText = this.props.activeText && <p>{this.props.activeText}</p>;

  inactiveText = this.props.inactiveText && <p>{this.props.inactiveText}</p>;

  render() {
    return (
      <div className={styles.capacityCell}>
        {
          this.isActive() ?
            this.activeText :
            this.inactiveText
        }
      </div>
    );
  }
}
