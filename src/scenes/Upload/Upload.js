import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

import styles from './Upload.css';

export class Upload extends Component {
  render() {
    return (
      <div className={styles.upload}>
        <div>
          <h2>Enter JEE Assessment</h2>
          <p>Upload a JEE report, if available. Or if you have downloaded report scores from this application before, upload them here.</p>
          <p>Click <a href="#">here</a> to see details on the format of the JEE report file.</p>
          <div>
            <RaisedButton className={styles.uploadButton} label="Select a File" primary={true} />
            <RaisedButton className={styles.uploadButton} label="Upload"/>
          </div>
        </div>
        <RaisedButton
          className={styles.noUploadButton}
          label="I don't have an assessment to upload"
          primary={true}
          containerElement={<Link to="/start/" />}
        />
      </div>
    )
  }
}
