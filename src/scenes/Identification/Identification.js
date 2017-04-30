import React, { Component } from 'react';
import styles from './Identification.css';

import {CountryPicker} from "./components/CountryPicker/CountryPicker";
import { CountryPickerActive } from './components/CountryPickerActive/CountryPickerActive';

export class Identification extends Component {
  render() {
    return (
      <div className={styles.identification}>
        <CountryPickerActive />
        <div className={styles.countryDetails}>
          <h2>Modify country details</h2>
          <div className={styles.countryDetailsContent}>
            <div className={styles.countryDetailsPop}>
              <p>
                What is the population of your country?
              </p>
              <p>
                309,403,273
              </p>
              <p>
                Modify
              </p>
            </div>
          </div>
          <div>
            <table>
              <tr>
                <td>Geographic Level</td>
                <td>Name</td>
                <td>Approximate Count</td>
                <td></td>
              </tr>
              <tr>
                <td>Level 1</td>
                <td>Country</td>
                <td>1</td>
                <td>Modify</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
