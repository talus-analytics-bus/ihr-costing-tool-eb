import React, { Component } from 'react';

import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Popover from 'material-ui/Popover';
import styles from './AssessmentMain.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export class ExpenseRow extends Component {
  constructor(props) {
    super(props);

    const { cost, cost_unit, cost_duration, multiplier_staff, multiplier_health_capacity, multiplier_population, multiplier_depreciation, multiplier_area_name, multiplier_area_value } = this.props.expense;

    this.state = {
      cost,
      cost_unit,
      cost_duration,
      multiplier_staff,
      multiplier_health_capacity,
      multiplier_population,
      multiplier_depreciation,
      multiplier_area_name,
      multiplier_area_value,
      sourceOpen: false
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

  toggleSource = () => {
    this.setState({
      sourceOpen: !this.state.sourceOpen,
    })
  }

  formatCurrency = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: this.props.activeCurrency.key || 'USD',
      minimumFractionDigits: 2,
    });

    return formatter.format(value || 0);
  }

  reset = () => {
    const { cost, cost_unit, cost_duration, multiplier_staff, multiplier_health_capacity, multiplier_population, multiplier_depreciation } = this.props.expense.defaults;

    this.setState({
      cost,
      cost_unit,
      cost_duration,
      multiplier_staff,
      multiplier_health_capacity,
      multiplier_population,
      multiplier_depreciation
    })
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
            {this.formatCurrency([
              this.state.cost || 0,
              this.state.cost_duration || 1,
              this.state.multiplier_staff || 1,
              this.state.multiplier_health_capacity || 1,
              this.state.multiplier_population || 1,
            ].reduce((acc, el) => acc * el, 1))}
          </div>
          <div className={`${styles.expenseRowCosts} ${styles.expenseCurrency}`}>
            {
              this.formatCurrency(
                this.state.multiplier_depreciation ?
                  [
                    this.state.cost || 0,
                    this.state.cost_duration || 1,
                    this.state.multiplier_staff || 1,
                    this.state.multiplier_health_capacity || 1,
                    this.state.multiplier_population || 1,
                    this.state.multiplier_depreciation,
                  ].reduce((acc, el) => acc * el, 1)
                  : 0
              )
            }
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
                        floatingLabelText={this.props.expense.multiplier_area_name}
                        floatingLabelFixed={true}
                        className={styles.expenseRowInput}
                        value={this.state.multiplier_area_value}
                        hintText={this.nullHintText(this.state.multiplier_area_value)}
                        onChange={(e) => this.handleChange('multiplier_area_value', e.target.value)}
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
                  onClick={this.reset}
                />
                <RaisedButton
                  label="Cancel"
                  onClick={this.cancel}
                />
                <RaisedButton
                  label="Confirm"
                  onClick={this.save}
                />
                <RaisedButton
                  label="View sources"
                  // onClick={this.toggleSource}
                  // onRequestClose={this.toggleSource}
                />
                <Popover
                  open={this.state.sourceOpen}
                >
                  <Card>
                    <CardText>
                      {this.props.expense.sources}
                    </CardText>
                  </Card>
                </Popover>
              </CardActions>
            </Card>

            :null
        }
      </div>
    );
  }
}