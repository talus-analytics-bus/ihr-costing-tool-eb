import React, { Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import styles from './CountryDetails.css'
import { GeoLevels } from '../GeoLevels/GeoLevels';

export class CountryDetails extends Component {


  render() {
    return (
      <div className={styles.countryDetails}>
        <h2>Modify country details</h2>
        <div className={styles.countryDetailsContent}>
          <div className={styles.countryDetailsPop}>
            <div className={styles.populationText}>
              <p>
                What is the population of your country?
              </p>
            </div>
            <div className={styles.populationCount}>
              <p>
                {this.props.population && this.props.population.toLocaleString()}
              </p>
            </div>
            <div className={styles.populationAction}>
                <RaisedButton label="Modify"/>
            </div>
          </div>
        </div>
        <GeoLevels geoLevels={this.props.geoLevels} />
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
