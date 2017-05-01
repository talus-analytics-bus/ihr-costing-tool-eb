import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { ManualAssessmentActive } from './components/ManualAssessmentActive';

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
        <ManualAssessmentActive/>
      </div>
    )
  }
}
