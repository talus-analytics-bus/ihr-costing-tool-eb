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
      epi_count: null,
      chw_count: null,
    }
  }

  handleChange = (event, key) => {
    this.setState({
      [key]: event.target.value,
    });
    this.props.setStaff(key, event.target.value);
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
                  errorText={this.props.population.error}
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
            <div className={styles.otherDetails}>
              <div className={styles.otherDetailsText}>
                <p>Approximately, how many epidemiologists work in your country?</p>
              </div>
              <div className={styles.otherDetailsCount}>
                {
                  !this.props.staff.epi_count.editing && (
                    <p>
                      {this.props.staff.epi_count.value && Number(this.props.staff.epi_count.value).toLocaleString()}
                    </p>
                  )
                }
                {
                  this.props.staff.epi_count.editing && (
                    <TextField
                      defaultValue={this.props.staff.epi_count.value || 0}
                      onChange={(e) => this.handleChange(e, 'epi_count')}
                      onKeyPress={(e) => this.handleKeyPress(e, 'epi_count')}
                    />
                  )
                }
              </div>
              <div className={styles.otherDetailsAction}>
                {
                  !this.props.staff.epi_count.editing && (
                    <RaisedButton
                      label="Modify"
                      onClick={() => this.props.toggleEdit('epi_count')}/>
                  )
                }
              </div>
            </div>
            <div className={styles.otherDetails}>
              <div className={styles.otherDetailsText}>
                <p>Approximately, how many community health workers work in your country?</p>
              </div>
              <div className={styles.otherDetailsCount}>
                {
                  !this.props.staff.chw_count.editing && (
                    <p>
                      {this.props.staff.chw_count.value && Number(this.props.staff.chw_count.value).toLocaleString()}
                    </p>
                  )
                }
                {
                  this.props.staff.chw_count.editing && (
                    <TextField
                      defaultValue={this.props.staff.epi_count.value || 0}
                      onChange={(e) => this.handleChange(e, 'chw_count')}
                      onKeyPress={(e) => this.handleKeyPress(e, 'chw_count')}
                    />
                  )
                }
              </div>
              <div className={styles.otherDetailsAction}>
                {
                  !this.props.staff.chw_count.editing && (
                    <RaisedButton
                      label="Modify"
                      onClick={() => this.props.toggleEdit('chw_count')}/>
                  )
                }
              </div>
            </div>
            <div>
              <div>
                <p>Approximately, how many health care facilities are in your country?</p>
              </div>
              <div>
                <p>
                  n/a
                </p>
              </div>
              <div>
                Modify
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
