import React, {Component} from 'react';

import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Popover from 'material-ui/Popover';
import styles from './AssessmentMain.scss';
import {Card, CardActions, CardText} from 'material-ui/Card';

export class ExpenseRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.expense.multipliers,
      sourceOpen: false
    };

    /* Apply exchange rate to cost */
    let exchange_rate_multiplier;
    let exchange_rates = this.props.activeCurrency.details.exchange_rates || [];
    if (exchange_rates.length > 0) {
      exchange_rate_multiplier = exchange_rates[0].multiplier;
    } else {
      exchange_rate_multiplier = 1.0;
    }
    this.setState({
      cost: this.state.cost * exchange_rate_multiplier,
    })
  }

  getStartup = () => {
    return [
      this.state.cost || 0,
      this.state.duration || 1,
      this.state.staff || 1,
      (this.state.area !== null) ? this.state.area : 1,
      this.state.population || 1,
      this.state.facility || 1,
    ].reduce((acc, el) => acc * el, 1);
  };

  getRecurring = () => {
    const isRecurring = this.state.cost_type === "recurring";
    const isDepreciating = this.state.depreciation !== null && this.state.depreciation !== 1.0;

    // If it's not depreciating and not recurring, recurring annual costs are zero
    if (!isRecurring && !isDepreciating) {
      return 0.0;
    }

    const recurringCost = [
      this.state.cost || 0,
      this.state.duration || 1,
      this.state.staff || 1,
      (this.state.area !== null) ? this.state.area : 1,
      this.state.population || 1,
      this.state.facility || 1,
    ].reduce((acc, el) => acc * el, 1);

    // If it's depreciating, then the recurring annual cost equals the startup costs times the depreciation factor
    if (isDepreciating) {
      return recurringCost * this.state.depreciation;
    }
    if (isRecurring) {
      return recurringCost;
    }
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
                        value={this.state.duration}
                        hintText={this.nullHintText(this.state.duration)}
                        onChange={(e) => this.handleChange('duration', e.target.value)}
                      />
                    </div>
                    {
                      this.props.expense.multiplier_staff !== null &&
                      <div>
                        <TextField
                          floatingLabelText="staff"
                          floatingLabelFixed={true}
                          className={styles.expenseRowInput}
                          value={this.state.staff}
                          hintText={this.nullHintText(this.state.staff)}
                          disabled={this.props.expense.multiplier_staff === null}
                          onChange={(e) => this.handleChange('staff', e.target.value)}
                        />
                      </div>
                    }
                    {
                      this.props.expense.multiplier_area !== null &&
                      <div>
                        <TextField
                          floatingLabelText="area"
                          floatingLabelFixed={true}
                          className={styles.expenseRowInput}
                          value={this.state.area}
                          hintText={this.nullHintText(this.state.area)}
                          disabled={this.props.expense.multiplier_area === null}
                          onChange={(e) => this.handleChange('area', e.target.value)}
                        />
                      </div>
                    }
                    {
                      this.props.expense.multiplier_population !== null &&
                      <div>
                        <TextField
                          floatingLabelText="population"
                          floatingLabelFixed={true}
                          className={styles.expenseRowInput}
                          value={this.state.population}
                          hintText={this.nullHintText(this.state.population)}
                          disabled={this.props.expense.multiplier_population === null}
                          onChange={(e) => this.handleChange('population', e.target.value)}
                        />
                      </div>
                    }
                    {
                      this.props.expense.multiplier_facility !== null &&
                      <div>
                        <TextField
                          floatingLabelText="facilities"
                          floatingLabelFixed={true}
                          className={styles.expenseRowInput}
                          value={this.state.facility}
                          hintText={this.nullHintText(this.state.facility)}
                          disabled={this.props.expense.multiplier_facility === null}
                          onChange={(e) => this.handleChange('facility', e.target.value)}
                        />
                      </div>
                    }
                  </div>
                  <div className={styles.expenseRowFormRecurring}>
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

            : null
        }
      </div>
    );
  }
}
