import React, { Component } from 'react';
import styles from './CapacityTable.scss';
import Checkbox from 'material-ui/Checkbox';

export class CapacityTableCell extends Component {
  isActive = () => this.props.hasOwnProperty('active') ? this.props.active : true;

  render() {
    return (
      <div
        className={`${styles.capacityCellWithRadio} ${!this.isActive() ? styles.capacityCellInactive : null}`}
        onClick={this.props.handleClick}
      >
        <Checkbox
          className={styles.capacityCellRadio}
          checked={this.props.checked || false}
        />
        {
          this.isActive() &&
          <p>{this.props.text}</p>
        }
      </div>
    );
  }
}
