import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export class Start extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Upload JEE Report</h2>
          <p>Upload a JEE report, if available. Or if you hae downloaded report scores from this application before, upload them here.</p>
          <p>Click <a href="#">here</a> to see details on the format of the JEE report file.</p>
          <div>
            <RaisedButton label="Select a File" primary={true} />
          </div>
          <div>
            <RaisedButton label="Upload"/>
          </div>
        </div>
        <div>
          <p>- or -</p>
        </div>
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
            <DropDownMenu value="assessment">
              <MenuItem value="assessment" primaryText="Complete all assessments first"></MenuItem>
              <MenuItem value="costing" primaryText="Assess when needed"></MenuItem>
            </DropDownMenu>
          </div>
          <div>
            <RaisedButton label="Start"/>
          </div>
        </div>
      </div>
    )
  }
}
