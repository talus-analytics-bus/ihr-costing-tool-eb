import React, { Component } from 'react';

import styles from './AssessmentMain.scss';
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
	  let filterFcn = this.hideInapplicableExpenses;
	  let geoLevels = this.props.geoLevels;
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
				.filter((expense => { 
					
					let countryHasNoIntermediate2 = this.props.geoLevels["Level 3"].name === null; 
					let expenseIsIntermediate2 = expense.multiplier_area === "level_3";
					let expenseIsApplicable = !countryHasNoIntermediate2 || !expenseIsIntermediate2;
					
					let idsMatch = expense.expense_id === expenseGroup.id 
					let showExpense = idsMatch && expenseIsApplicable;
					return showExpense;
					
					}
				))
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
