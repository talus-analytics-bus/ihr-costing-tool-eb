import React, { Component } from 'react';
import styles from './Identification.css';

import { CountryPickerActive } from './components/CountryPickerActive/CountryPickerActive';
import { CountryDetailsActive } from './components/CountryDetails/CountryDetailsActive';

import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'


export class Identification extends Component {
  render() {
    return (
      <div className={styles.identification}>
        <CountryPickerActive />
        <CountryDetailsActive />
        <div>
          <RaisedButton
            label="Continue"
            containerElement={<Link to="/start/" />}
            linkButton={true}
          />
        </div>
      </div>
    )
  }
}
