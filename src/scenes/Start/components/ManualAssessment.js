import React, { Component } from 'react';

import styles from './ManualAssessment.css';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export class ManualAssessment extends Component {
  render() {
    return (
      <div>
        <h2>Enter JEE scores manually</h2>
        <p>
          Would you like to enter all JEE indicator scores before costing
          or enter the score for each indicator as you cost?
        </p>
        <div>
          <RadioButtonGroup
            name="assessFirst"
            valueSelected={this.props.manual.assessmentFirst}
            onChange={(e) => this.props.setAssessmentFirst(e.target.value)}
          >
            <RadioButton
              className={styles.radioButton}
              value={true}
              label="Enter all indicator scores first"
            />
            <RadioButton
              className={styles.radioButton}
              value={false}
              label="Enter scores as I cost each indicator"
            />
          </RadioButtonGroup>
        </div>
        <div className={styles.continueButtonContainer}>
          <RaisedButton
            primary={true}
            label="Start"
            containerElement={<Link to="/assessment/" />}
          />
        </div>
      </div>
    );
  }
}