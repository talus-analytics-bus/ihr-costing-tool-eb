import React, { Component } from 'react';
import styles from './Identification.css';

import { CountryPickerActive } from './components/CountryPickerActive/CountryPickerActive';
import { CountryDetailsActive } from './components/CountryDetails/CountryDetailsActive';

export class Identification extends Component {
  render() {
    return (
      <div className={styles.identification}>
        <CountryPickerActive />
        <CountryDetailsActive />
      </div>
    )
  }
}
