import React, { Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from './CountryDetails.scss'
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
        <h2>Enter country details</h2>
        <h4>Costs associated with implementing the International Health Regulations depend on the
        population size, geographic organization, and public health infrastructure in your country.
        Review and complete the information below for use by the costing calculations.
        Default values are provided, where available, and can be changed using the MODIFY button.
        Complete all blanks by selecting the corresponding MODIFY button and entering the correct value.
        </h4>
        <div className={styles.countryDetailsContent}>
          <div className={styles.countryDetailsPopTitle}>Population</div>
          <div className={styles.countryDetailsPop}>
            <div className={styles.populationText}>
              <p>
                What is the current total population of your country?
              </p>
            </div>
			<div className={styles.populationFake}>
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
                  hintText={!Boolean(this.props.population.value) ? 'undefined' : null}
                  onChange={(e) => this.handlePopulationChange(e)}
                  onKeyPress={(e) => this.handleKeyPress(e, 'population')}
                  errorText={this.props.population.error}
                />
              )
            }
            </div>
            <div className={styles.populationAction}>
              <RaisedButton
                label={this.props.population.editing ? 'Save' : 'Modify'}
                onClick={() => this.props.toggleEdit('population', this.props.population.editing, this.state.population)}/>
            </div>
          </div>
        </div>
        <GeoLevels
          geoLevels={this.props.geoLevels}
          toggleEdit={this.props.toggleEdit}
          setGeoLevel={this.props.setGeoLevel}
        />
        <div className={styles.otherDetailsContainer}>
          <div className={styles.otherDetailsTitle}>Public Health Infrastructure</div>
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
                      defaultValue={this.props.staff.epi_count.value}
                      hintText={!Boolean(this.props.staff.epi_count.value) ? 'undefined' : null}
                      onChange={(e) => this.handleChange(e, 'epi_count')}
                      onKeyPress={(e) => this.handleKeyPress(e, 'epi_count')}
                    />
                  )
                }
              </div>
              <div className={styles.otherDetailsAction}>
                <RaisedButton
                  label={this.props.staff.epi_count.editing ? 'Save' : 'Modify'}
                  onClick={() => this.props.toggleEdit('epi_count')}/>
              </div>
            </div>
            <div className={styles.otherDetails}>
              <div className={styles.otherDetailsText}>
                <p>Approximately, how many community health workers are there in your country?</p>
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
                      defaultValue={this.props.staff.chw_count.value}
                      hintText={!Boolean(this.props.staff.chw_count.value) ? 'undefined' : null}
                      onChange={(e) => this.handleChange(e, 'chw_count')}
                      onKeyPress={(e) => this.handleKeyPress(e, 'chw_count')}
                    />
                  )
                }
              </div>
              <div className={styles.otherDetailsAction}>
                <RaisedButton
                  label={this.props.staff.chw_count.editing ? 'Save' : 'Modify'}
                  onClick={() => this.props.toggleEdit('chw_count')}/>
              </div>
            </div>
            <div className={styles.otherDetails}>
              <div className={styles.otherDetailsText}>
                <p>Approximately, how many health care facilities are in your country?</p>
              </div>
              <div className={styles.otherDetailsCount}>
                {
                  !this.props.facilities.editing && (
                    <p>
                      {this.props.facilities.value && Number(this.props.facilities.value).toLocaleString()}
                    </p>
                  )
                }
                {
                  this.props.facilities.editing && (
                    <TextField
                      defaultValue={this.props.facilities.value}
                      hintText={!Boolean(this.props.facilities.value) ? 'undefined' : null}
                      onChange={(e) => this.handleChange(e, 'facilities')}
                      onKeyPress={(e) => this.handleKeyPress(e, 'facilities')}
                    />
                  )
                }
              </div>
              <div className={styles.otherDetailsAction}>
                <RaisedButton
                  label={this.props.facilities.editing ? 'Save' : 'Modify'}
                  onClick={() => this.props.toggleEdit('facilities')}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
