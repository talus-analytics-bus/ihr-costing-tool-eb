import React, {Component} from 'react';

import styles from './AssessmentMain.scss';
import {ExpenseRowActive} from './ExpenseRowActive';

export class ExpenseTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [...new Set(props.expenses.map((expense) => expense.category))]
    }
  }

  render() {
    return (
      <div className={styles.expenseTable}>
        {
          this.state.categories.map((category) =>
            <div key={category}>
              <p>
                {category}
              </p>
              {
                this.props.expenses
                  .filter((expense) => {
                    const countryHasNoIntermediate2 = this.props.geoLevels["Level 3"].name === null;
                    const expenseIsIntermediate2 = expense.multiplier_area === "level_3";
                    const expenseIsApplicable = !countryHasNoIntermediate2 || !expenseIsIntermediate2;
                    const inCategory = expense.category === category;
                    const showExpense = inCategory && expenseIsApplicable;

                    return showExpense;

                  })
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
