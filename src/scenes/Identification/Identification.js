import React, { Component } from 'react';
import styles from './Identification.css';

import {CountryPicker} from "./components/CountryPicker/CountryPicker";

export class Identification extends Component {
  render() {
    return (
      <div className={styles.identification}>
        <CountryPicker/>
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
        </div>
      </div>
    )
  }
}
