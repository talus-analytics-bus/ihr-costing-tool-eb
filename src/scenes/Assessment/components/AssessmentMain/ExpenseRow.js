import React, { Component } from 'react';

import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from './AssessmentMain.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
            <Card>
              <CardText>
                <div className={styles.expenseRowForm}>
                  <div className={styles.expenseRowFormStartup}>
                    <div>
                      <TextField
                        floatingLabelText="salary per year"
                        floatingLabelFixed={true}
                        className={styles.expenseRowInput}
                        value={100}
                      />
                    </div>
                    <div>
                      <TextField
                        floatingLabelText="salary per year"
                        floatingLabelFixed={true}
                        className={styles.expenseRowInput}
                      />
                    </div>
                    <div>
                      <TextField
                        floatingLabelText="salary per year"
                        floatingLabelFixed={true}
                        className={styles.expenseRowInput}
                      />
                    </div>
                    <div>
                      <TextField
                        floatingLabelText="salary per year"
                        floatingLabelFixed={true}
                        className={styles.expenseRowInput}
                      />
                    </div>
                    <div>
                      <TextField
                        floatingLabelText="salary per year"
                        floatingLabelFixed={true}
                        className={styles.expenseRowInput}
                      />
                    </div>
                    <div>
                      <TextField
                        floatingLabelText="salary per year"
                        floatingLabelFixed={true}
                        className={styles.expenseRowInput}
                      />
                    </div>
                  </div>
                  <div className={styles.expenseRowFormRecurring}>
                    <div>
                      <TextField
                        floatingLabelText="salary per year"
                        floatingLabelFixed={true}
                        className={styles.expenseRowInput}
                      />
                    </div>
                  </div>
                </div>
              </CardText>
              <CardActions>
                <RaisedButton
                  label="Set to defaults"
                />
                <RaisedButton
                  label="Cancel"
                />
                <RaisedButton
                  label="Confirm"
                />
                <RaisedButton
                  label="View sources"
                />
              </CardActions>
            </Card>

            :null
        }
      </div>
    );
  }
}
