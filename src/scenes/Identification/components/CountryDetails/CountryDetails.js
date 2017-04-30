import React, { Component} from 'react';

import styles from './CountryDetails.css'

export class CountryDetails extends Component {

  geoLevel = (key) => {
    return (
      <tr>
        <td>{ key }</td>
        <td>{ this.props.geoLevels[key].name }</td>
        <td>{ this.props.geoLevels[key].count && this.props.geoLevels[key].count.toLocaleString() }</td>
        <td>Modify</td>
      </tr>
    )
  }

  render() {
    return (
      <div className={styles.countryDetails}>
        <h2>Modify country details</h2>
        <div className={styles.countryDetailsContent}>
          <div className={styles.countryDetailsPop}>
            <p>
              What is the population of your country?
            </p>
            <p>
              {this.props.population && this.props.population.toLocaleString()}
            </p>
            <p>
              Modify
            </p>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <td>Geographic Level</td>
                <td>Name</td>
                <td>Approximate Count</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
            {
              Object.keys(this.props.geoLevels)
                .map(this.geoLevel.bind(this))
            }
            </tbody>
          </table>
        </div>
        <div>
          <p>Advanced Options</p>
          <table>
            <tbody>
              <tr>
                <td>epidemiologists</td>
                <td>{this.props.staff.epi_count}</td>
                <td>Modify</td>
              </tr>
              <tr>
                <td>community health workers</td>
                <td>{this.props.staff.chw_count}</td>
                <td>Modify</td>
              </tr>
              <tr>
                <td>national hospitals</td>
                <td>{this.props.hospitals.level_1_count}</td>
                <td>Modify</td>
              </tr>
              <tr>
                <td>state hospitals</td>
                <td>{this.props.hospitals.level_2_count}</td>
                <td>Modify</td>
              </tr>
              <tr>
                <td>county hospitals</td>
                <td>{this.props.hospitals.level_3_count}</td>
                <td>Modify</td>
              </tr>
              <tr>
                <td>community health centers</td>
                <td>{this.props.hospitals.chc_count}</td>
                <td>Modify</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}
