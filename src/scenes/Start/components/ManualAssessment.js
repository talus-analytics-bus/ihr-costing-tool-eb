import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'

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
          <DropDownMenu value={this.props.manual.assessmentFirst} onChange={(e, i, v) => this.props.setAssessmentFirst(v)}>
            <MenuItem value={true} primaryText="Complete all assessments first"></MenuItem>
            <MenuItem value={false} primaryText="Assess when needed"></MenuItem>
          </DropDownMenu>
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
