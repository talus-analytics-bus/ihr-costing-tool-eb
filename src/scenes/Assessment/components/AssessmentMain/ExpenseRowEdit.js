import React, { Component } from 'react';
import {Card, CardActions, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Popover from 'material-ui/Popover';
import styles from './AssessmentMain.scss';

export class ExpenseRowEdit extends Component {
  nullHintText = (value) => {
    if (value) {
      return '';
    }
    return 'n/a';
  }

  render = () => {
    return (
      <Card>
        <CardText>
          <div className={styles.expenseRowForm}>
            <div className={styles.expenseRowFormStartup}>
              <div>
                <TextField
                  floatingLabelText={this.props.expense.cost_unit}
                  floatingLabelFixed={true}
                  className={styles.expenseRowInput}
                  value={this.props.currentState.cost || ''}
                  hintText={this.nullHintText(this.props.currentState.cost)}
                  onChange={(e) => this.props.handleChange('cost', e.target.value)}
                />
              </div>
              <div>
                <TextField
                  floatingLabelText={this.props.expense.cost_duration_unit}
                  floatingLabelFixed={true}
                  className={styles.expenseRowInput}
                  value={this.props.currentState.duration || ''}
                  hintText={this.nullHintText(this.props.currentState.duration)}
                  onChange={(e) => this.props.handleChange('duration', e.target.value)}
                />
              </div>
              {
                this.props.expense.multiplier_staff !== null &&
                <div>
                  <TextField
                    floatingLabelText="staff"
                    floatingLabelFixed={true}
                    className={styles.expenseRowInput}
                    value={this.props.currentState.staff || ''}
                    hintText={this.nullHintText(this.props.currentState.staff)}
                    disabled={this.props.expense.multiplier_staff === null}
                    onChange={(e) => this.props.handleChange('staff', e.target.value)}
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
                    value={this.props.currentState.area || ''}
                    hintText={this.nullHintText(this.props.currentState.area)}
                    disabled={this.props.expense.multiplier_area === null}
                    onChange={(e) => this.props.handleChange('area', e.target.value)}
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
                    value={this.props.currentState.population || ''}
                    hintText={this.nullHintText(this.props.currentState.population)}
                    disabled={this.props.expense.multiplier_population === null}
                    onChange={(e) => this.props.handleChange('population', e.target.value)}
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
                    value={this.props.currentState.facility || ''}
                    hintText={this.nullHintText(this.props.currentState.facility)}
                    disabled={this.props.expense.multiplier_facility === null}
                    onChange={(e) => this.props.handleChange('facility', e.target.value)}
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
            onClick={this.props.handleReset}
          />
          <RaisedButton
            label="Cancel"
            onClick={this.props.handleCancel}
          />
          <RaisedButton
            label="Confirm"
            onClick={this.props.handleSave}
          />
          <RaisedButton
            label="View sources"
          />
          <Popover
            open={this.props.currentState.sourceOpen}
            onClick={this.props.handleSource}
          >
            <Card>
              <CardText>
                {this.props.expense.sources}
              </CardText>
            </Card>
          </Popover>
        </CardActions>
      </Card>
    );
  }
}
