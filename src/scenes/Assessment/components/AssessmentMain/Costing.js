import React, { Component } from 'react';
import {Peeper} from "../../../../components/Peeper/Peeper";
import { ExpenseTable } from './ExpenseTable';
import { capacityLevels } from '../../Assessment';
import styles from './AssessmentMain.scss';

export class Costing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peep: this.props.activeCapacity.indicators.reduce((prev, indicator) => {
        prev[indicator.jee_id] = false;
        return prev;
      }, {})
    }
  }

  handlePeep = (key) => {
    this.setState({
      peep: {
        ...this.state.peep,
        [key]: !this.state.peep[key]
      }
    })
  }

  render() {

    return (
      <div className={styles.costingContainer}>
      {
        this.props.activeCapacity.indicators.map((indicator, index) =>
        <Peeper
          key={index}
          label={`Indicator ${index + 1} of ${this.props.activeCapacity.indicators.length}: ${indicator.name}`}
          show={this.state.peep[indicator.jee_id]}
          togglePeeper={() => this.handlePeep(indicator.jee_id)}
        >
          <div>
            <p>Current Capacity: <strong>{capacityLevels[indicator.selectedLevel || 0]} ({(indicator.selectedLevel || 0) + 1})</strong></p>
            <p>Upgrade capacity to <strong>{capacityLevels[(indicator.selectedLevel || 0) + 1] || capacityLevels[4]} ({Math.min((indicator.selectedLevel || 0) + 2, 5)})</strong></p>
          </div>
          <div className={styles.expenseTableLabels}>
            <div className={styles.expenseRowName}>&nbsp;</div>
            <div className={styles.expenseRowCosts}>Start-up costs</div>
            <div className={styles.expenseRowCosts}>Recurring annual costs</div>
            <div className={styles.expenseRowAction}>&nbsp;</div>
          </div>
          <ExpenseTable expenses={indicator.expenses} activeCurrency={this.props.activeCurrency} />
        </Peeper>
        )
      }
      </div>
    )
  }
}
