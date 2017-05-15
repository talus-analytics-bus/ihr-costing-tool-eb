import React, { Component } from 'react';
import styles from './Identification.css';

import { CountryPickerActive } from './components/CountryPicker/CountryPickerActive';
import { CountryDetailsActive } from './components/CountryDetails/CountryDetailsActive';

import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';


export class Identification extends Component {
  // checks that all required fields are filled
  checkComplete() {
    // list of required geolevels
    // currently hardcoded to look inside geolevels object only
    const required = [
      'Level 1',
      'Level 2',
      'Level 4',
    ];

    // checks if any required field has error
    const hasErrors = required.reduce((prev, curr) => {
      // check that geolevel target has values
      const targetObj = this.props.geoLevels[curr];
      const hasError = !Boolean(targetObj.name) || !Boolean(targetObj.value);

      // this will display error message
      if (hasError) {
        this.props.validate(curr);
      }

      return prev || hasError;
    }, false);

    if (!hasErrors) {
      // no error? go to next step
      window.location.href = '/upload/'
    }
  }

  render() {
    return (
      <div className={styles.identification}>
        <div className={styles.countryPickerContainer}>
          <CountryPickerActive />
        </div>
        <div className={styles.countryDetailsContainer}>
          <CountryDetailsActive />
        </div>
        <div className={styles.continueAction}>
          <RaisedButton
            primary={true}
            label="Continue"
            onClick={() => this.checkComplete()}
          />
        </div>
      </div>
    )
  }
}
