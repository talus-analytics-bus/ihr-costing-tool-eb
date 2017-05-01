import React, { Component } from 'react';

import Checkbox from 'material-ui/Checkbox';

import styles from './AssessmentMain.css';

export class ExpenseTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenseGroups: [...new Set(props.expenses.map((expense) => expense.expense_id))]
        .map((id) => {
          const expenseGroup = props.expenses.find((expense) => expense.expense_id === id);
          return {
            id,
            name: expenseGroup.name,
            description: expenseGroup.description,
          }
        })
    }
  }

  render() {
    return (
      <div className={styles.expenseTable}>
      {
        this.state.expenseGroups.map((expenseGroup) =>
          <div>
            <p>
              {expenseGroup.name}
            </p>
            {
              this.props.expenses
                .filter((expense) => expense.expense_id === expenseGroup.id)
                .map((expense) =>
                  <div className={styles.expenseRow}>
                    <div className={styles.expenseRowSelect}>
                      <Checkbox
                        checked={false}
                      />
                    </div>
                    <div className={styles.expenseRowName}>{expense.sophistication_name}</div>
                    <div className={styles.expenseRowCosts}>
                      {[
                        expense.cost || 0,
                        expense.cost_duration || 1,
                        expense.multiplier_staff || 1,
                        expense.multiplier_health_capacity || 1,
                        expense.multiplier_population || 1,
                        expense.multiplier_depreciation || 1,
                      ].reduce((acc, el) => acc * el, 1)}
                      </div>
                    <div className={styles.expenseRowCosts}>0</div>
                    <div className={styles.expenseRowAction}>Edit</div>
                  </div>
                )
            }
          </div>
        )
      }
      </div>
    )
  }
}
