import React, { Component } from 'react';
import {Peeper} from "../../../../components/Peeper/Peeper";
import { ExpenseTable } from './ExpenseTable';
import { capacityLevels } from '../../Assessment';
import styles from './AssessmentMain.scss';

export class Costing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // maintains show/hide state of indicator
      peep: this.props.activeCapacity.indicators.reduce((prev, indicator, index) => {
        // show the first indicator so the user doesn't see everything collapsed
        prev[indicator.jee_id] = index === 0;
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
        this.props.activeCapacity.indicators.map((indicator, index) => {
          const selectedLevelIndex = indicator.selectedLevel || 0;
          // target level is 1 more than selected level
          const targetLevelIndex = Math.min(selectedLevelIndex + 1, 4);
          const expensesInTargetLevel = indicator.expenses
            .filter((expense) => expense.target_score === targetLevelIndex + 1);

          return (
            <Peeper
              key={index}
              label={`Indicator ${index + 1} of ${this.props.activeCapacity.indicators.length}: ${indicator.name}`}
              show={this.state.peep[indicator.jee_id]}
              togglePeeper={() => this.handlePeep(indicator.jee_id)}
            >
              <div>
                <p>Current Capacity: <strong>{capacityLevels[selectedLevelIndex]} ({selectedLevelIndex + 1})</strong></p>
                <p>Target Capacity: <strong>{capacityLevels[targetLevelIndex] || capacityLevels[4]} ({targetLevelIndex + 1})</strong></p>
              </div>
              <div className={styles.expenseTableLabels}>
                <div className={styles.expenseRowFake}>&nbsp;</div>
                <div className={styles.expenseRowName}>&nbsp;</div>
                <div className={styles.expenseRowCosts}>Start-up costs</div>
                <div className={styles.expenseRowCosts}>Recurring annual costs</div>
                <div className={styles.expenseRowAction}>&nbsp;</div>
              </div>
              <ExpenseTable geoLevels={this.props.geoLevels} expenses={expensesInTargetLevel} activeCurrency={this.props.activeCurrency} />
            </Peeper>
          )
        })
      }
      </div>
    )
  }
}
