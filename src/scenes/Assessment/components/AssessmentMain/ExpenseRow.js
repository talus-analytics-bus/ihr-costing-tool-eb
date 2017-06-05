import React, {Component} from 'react';

import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './AssessmentMain.scss';
import { ExpenseRowEdit } from './ExpenseRowEdit';

import { getStartupCosts, getRecurringCost } from '../../../../lib/costing';

export class ExpenseRow extends Component {
  constructor(props) {
    super(props);

    /* Apply exchange rate to cost */
    let exchange_rate_multiplier;
    let exchange_rates = this.props.activeCurrency.details.exchange_rates || [];
    if (exchange_rates.length > 0) {
      exchange_rate_multiplier = exchange_rates[0].multiplier;
    } else {
      exchange_rate_multiplier = 1.0;
    }

    this.state = {
      ...props.expense.multipliers,
      sourceOpen: false,
      cost: props.expense.multipliers.cost * exchange_rate_multiplier,
    };
  }

  getStartup = () => getStartupCosts(this.state);

  getRecurring = () => getRecurringCost(this.state);

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  toggleSource = () => {
    this.setState({
      sourceOpen: !this.state.sourceOpen,
    })
  }

  formatCurrency = (value) => {

    // Format currency as USD by default
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });

    /*If currency code is a 3-character upper case letter code, add a space after.
     Otherwise, do not add a space.*/
    const currencyCode_tmp = this.props.activeCurrency.key;
    const regexp = /[A-Z][A-Z][A-Z]/gi;
    const addSpace = regexp.test(currencyCode_tmp);
    let currencyCode;

    if (currencyCode_tmp === "USD") {
      currencyCode = "$";
    }
    else if (addSpace) {
      currencyCode = currencyCode_tmp + " ";
    } else {
      currencyCode = currencyCode_tmp;
    }

    const formattedValArr = formatter.format(value || 0).split("$");

    formattedValArr[0] = currencyCode;
    return formattedValArr.join("");
  }

  reset = () => {
    this.setState({
      ...this.props.expense.defaults,
    });
    /* And apply exchange rate */

  }

  cancel = () => {
    this.reset();
    this.props.toggleEditingExpense(this.props.expense.expense_id, this.props.expense.sophistication_level[0]);
  }

  save = () => {
    this.props.changeValues(this.props.expense.expense_id, this.props.expense.sophistication_level[0], this.state);
  }


  render() {

    return (
      <div className={styles.expenseRow} key={this.props.expense.sophistication_level[0]}>
        <div className={styles.expenseRowSummary}>
          <div className={styles.expenseRowSelect}>
            <Checkbox
              checked={this.props.expense.selected}
              onCheck={() => this.props.selectExpense(this.props.expense.expense_id, this.props.expense.sophistication_level[0])}
            />
          </div>
          <div className={styles.expenseRowName}>{this.props.expense.sophistication_name}</div>
          <div className={`${styles.expenseRowCosts} ${styles.expenseCurrency}`}>
            {this.formatCurrency(this.getStartup())}
          </div>
          <div className={`${styles.expenseRowCosts} ${styles.expenseCurrency}`}>
            {this.formatCurrency(this.getRecurring())}
          </div>
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
            <ExpenseRowEdit
              expense={this.props.expense}
              currentState={this.state}
              handleChange={this.handleChange}
              handleReset={this.reset}
              handleCancel={this.cancel}
              handleSave={this.save}
              handleSource={this.toggleSource}
            />
            : null
        }
      </div>
    );
  }
}
