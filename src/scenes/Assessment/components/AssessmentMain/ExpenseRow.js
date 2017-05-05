import React, { Component } from 'react';

import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from './AssessmentMain.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export class ExpenseRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.expense,
    };

  }

  nullHintText = (value) => {
    if (value) {
      return '';
    }
    return 'n/a';
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

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
              this.state.cost || 0,
              this.state.cost_duration || 1,
              this.state.multiplier_staff || 1,
              this.state.multiplier_health_capacity || 1,
              this.state.multiplier_population || 1,
              this.state.multiplier_depreciation || 1,
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
                        floatingLabelText={this.props.expense.cost_unit}
                        floatingLabelFixed={true}
                        className={styles.expenseRowInput}
                        value={this.state.cost}
                        hintText={this.nullHintText(this.state.cost)}
                        onChange={(e) => this.handleChange('cost', e.target.value)}
                      />
                    </div>
                    <div>
                      <TextField
                        floatingLabelText={this.props.expense.cost_duration_unit}
                        floatingLabelFixed={true}
                        className={styles.expenseRowInput}
                        value={this.state.cost_duration}
                        hintText={this.nullHintText(this.state.cost_duration)}
                        onChange={(e) => this.handleChange('cost_duration', e.target.value)}
                      />
                    </div>
                    <div>
                      <TextField
                        floatingLabelText="staff"
                        floatingLabelFixed={true}
                        className={styles.expenseRowInput}
                        value={this.state.multiplier_staff}
                        hintText={this.nullHintText(this.state.multiplier_staff)}
                        onChange={(e) => this.handleChange('multiplier_staff', e.target.value)}
                      />
                    </div>
                    <div>
                      <TextField
                        floatingLabelText="countries"
                        floatingLabelFixed={true}
                        className={styles.expenseRowInput}
                      />
                    </div>
                    <div>
                      <TextField
                        floatingLabelText="population"
                        floatingLabelFixed={true}
                        className={styles.expenseRowInput}
                        value={this.state.multiplier_population}
                        hintText={this.nullHintText(this.state.multiplier_population)}
                        onChange={(e) => this.handleChange('multiplier_population', e.target.value)}
                      />
                    </div>
                    <div>
                      <TextField
                        floatingLabelText="staff"
                        floatingLabelFixed={true}
                        className={styles.expenseRowInput}
                        value={this.state.multiplier_health_capacity}
                        hintText={this.nullHintText(this.state.multiplier_health_capacity)}
                        onChange={(e) => this.handleChange('multiplier_health_capacity', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styles.expenseRowFormRecurring}>
                    <div>
                      <TextField
                        floatingLabelText="depreciation factor"
                        floatingLabelFixed={true}
                        className={styles.expenseRowInput}
                        value={this.state.multiplier_depreciation}
                        hintText={this.nullHintText(this.state.multiplier_depreciation)}
                        onChange={(e) => this.handleChange('multiplier_depreciation', e.target.value)}
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
