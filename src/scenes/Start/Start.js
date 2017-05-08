import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { ManualAssessmentActive } from './components/ManualAssessmentActive';

import styles from './Start.css';

export class Start extends Component {
  render() {
    return (
      <div className={styles.start}>
        <div>
          <h2>Upload JEE Report</h2>
          <p>Upload a JEE report, if available. Or if you have downloaded report scores from this application before, upload them here.</p>
          <p>Click <a href="#">here</a> to see details on the format of the JEE report file.</p>
          <div>
            <RaisedButton className={styles.uploadButton} label="Select a File" primary={true} />
            <RaisedButton className={styles.uploadButton} label="Upload"/>
          </div>
        </div>
        <div className={styles.orText}>
          <p>- or -</p>
        </div>
        <ManualAssessmentActive/>
      </div>
    )
  }
}
