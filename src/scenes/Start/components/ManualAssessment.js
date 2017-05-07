import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { Link } from 'react-router-dom'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export class ManualAssessment extends Component {
  render() {
    return (
      <div>
        <h2>Complete assessments manually</h2>
        <p>
          Would you like to complete all assessments before costing? <br />
          Or would you like to assess each indicator as you cost?
          <IconButton tooltip="Help text here">
            <ActionHome />
          </IconButton>
        </p>
        <div>
          <RadioButtonGroup
            name="assessFirst"
            valueSelected={this.props.manual.assessmentFirst}
            onChange={(e) => this.props.setAssessmentFirst(e.target.value)}
          >
            <RadioButton
              value={true}
              label="Complete all assessments first"
            />
            <RadioButton
              value={false}
              label="Assess and cost each indicator"
            />
          </RadioButtonGroup>
        </div>
        <div>
          <RaisedButton
            label="Start"
            containerElement={<Link to="/assessment/" />}
          />
        </div>
      </div>
    );
  }
}
