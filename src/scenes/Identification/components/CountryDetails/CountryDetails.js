import React, { Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from './CountryDetails.css'
import { GeoLevels } from '../GeoLevels/GeoLevels';

export class CountryDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      population: null,
    }
  }

  handleChange = (event, key) => {
    this.setState({
      [key]: event.target.value,
    })
  }

  handlePopulationChange = (event) => {
    this.setState({
      population: event.target.value,
    });
    this.props.setPopulation(event.target.value);
  }

  handleKeyPress = (event, target) => {
    if (event.key === 'Enter') {
      this.props.toggleEdit(target);
    }
  }

  render() {
    return (
      <div className={styles.countryDetails}>
        <h2>Modify country details</h2>
        <div className={styles.countryDetailsContent}>
          <div className={styles.countryDetailsPopTitle}>Population</div>
          <div className={styles.countryDetailsPop}>
            <div className={styles.populationText}>
              <p>
                What is the population of your country?
              </p>
            </div>
            <div className={styles.populationCount}>
            {
              !this.props.population.editing && (
                <p>
                  {this.props.population.value && Number(this.props.population.value).toLocaleString()}
                </p>
              )
            }
            {
              this.props.population.editing && (
                <TextField
                  defaultValue={this.props.population.value || 0}
                  onChange={(e) => this.handlePopulationChange(e)}
                  onKeyPress={(e) => this.handleKeyPress(e, 'population')}
                />
              )
            }
            </div>
            <div className={styles.populationAction}>
              {
                !this.props.population.editing && (
                  <RaisedButton
                    label="Modify"
                    onClick={() => this.props.toggleEdit('population', this.props.population.editing, this.state.population)}/>
                )
              }
            </div>
          </div>
        </div>
        <GeoLevels
          geoLevels={this.props.geoLevels}
          toggleEdit={this.props.toggleEdit}
          setGeoLevel={this.props.setGeoLevel}
        />
        <div className={styles.otherDetailsContainer}>
          <div className={styles.otherDetailsTitle}>Other</div>
          <div className={styles.otherDetailsContent}>
            <table>
              <tbody>
              <tr>
                <td>Approximately, how many epidemiologists work in your country?</td>
                <td>{this.props.staff.epi_count.value}</td>
                <td>Modify</td>
              </tr>
              <tr>
                <td>Approximately, how many community health workers work in your country?</td>
                <td>{this.props.staff.chw_count.value}</td>
                <td>Modify</td>
              </tr>
              <tr>
                <td>Approximately, how many health care facilities are in your country?</td>
                <td>n/a</td>
                <td>Modify</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

}
