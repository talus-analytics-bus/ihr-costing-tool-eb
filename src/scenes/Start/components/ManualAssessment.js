import React, { Component } from 'react';

import styles from './ManualAssessment.css';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export class ManualAssessment extends Component {
  render() {
    return (
      <div>
        <h2>Complete assessments manually</h2>
        <p>
          Assess the country&#39;s score for each capacity. Would you rather
          complete all assessments before costing or 
          assess each capacity as you cost?
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
              label="Complete all assessments first"
            />
            <RadioButton
              className={styles.radioButton}
              value={false}
              label="Assess and cost each indicator"
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