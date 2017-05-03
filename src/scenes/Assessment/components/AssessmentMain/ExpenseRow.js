import React, { Component } from 'react';

import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './AssessmentMain.css';

export class ExpenseRow extends Component {
  formatCurrency = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: this.props.activeCurrency.key || 'USD',
      minimumFractionDigits: 2,
    });

    return formatter.format(value || 0);
  }

  render() {
    return (
      <div className={styles.expenseRow} key={this.props.expense.sophistication_level[0]}>
        <div className={styles.expenseRowSummary}>
          <div className={styles.expenseRowSelect}>
            <Checkbox
              checked={this.props.expense.selected}
            />
          </div>
          <div className={styles.expenseRowName}>{this.props.expense.sophistication_name}</div>
          <div className={styles.expenseRowCosts}>
            {this.formatCurrency([
              this.props.expense.cost || 0,
              this.props.expense.cost_duration || 1,
              this.props.expense.multiplier_staff || 1,
              this.props.expense.multiplier_health_capacity || 1,
              this.props.expense.multiplier_population || 1,
              this.props.expense.multiplier_depreciation || 1,
            ].reduce((acc, el) => acc * el, 1))}
          </div>
          <div className={styles.expenseRowCosts}>{this.formatCurrency(0)}</div>
          <div className={styles.expenseRowAction}>
            {
              !this.props.expense.editing ?
                <RaisedButton
                  label="Edit"
                  onClick={() => this.props.toggleEditingExpense(this.props.expense.expense_id, this.props.expense.sophistication_level[0])}
                />
                : null
            }
          </div>
        </div>
        {
          this.props.expense.editing ?
            <div className={styles.expenseRowForm}>
              Editing
            </div>
            :null
        }
      </div>
    );
  }
}
