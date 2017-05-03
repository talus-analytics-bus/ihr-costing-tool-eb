import React, { Component } from 'react';

import styles from './AssessmentMain.css';
import { ExpenseRowActive } from './ExpenseRowActive';

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
          <div key={expenseGroup.id}>
            <p>
              {expenseGroup.name}
            </p>
            {
              this.props.expenses
                .filter((expense) => expense.expense_id === expenseGroup.id)
                .map((expense, index) =>
                  <ExpenseRowActive expense={expense} activeCurrency={this.props.activeCurrency} key={index}/>
                )
            }
          </div>
        )
      }
      </div>
    )
  }
}
