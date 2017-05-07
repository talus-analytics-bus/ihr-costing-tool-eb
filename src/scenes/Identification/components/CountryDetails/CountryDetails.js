import React, { Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from './CountryDetails.css'
import { GeoLevels } from '../GeoLevels/GeoLevels';
import { Peeper } from '../../../../components/Peeper/Peeper';

export class CountryDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      population: null,
    }
  }

  handleChange = (event, key) => {
    this.setState({
      [key]: event.target.value,
    })
  }

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
            {
              !this.props.population.editing && (
                <p>
                  {this.props.population.value && Number(this.props.population.value).toLocaleString()}
                </p>
              )
            }
            {
              this.props.population.editing && (
                <TextField defaultValue={this.props.population.value || 0} onChange={(e) => this.handleChange(e, 'population')}/>
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
        <GeoLevels geoLevels={this.props.geoLevels} toggleEdit={this.props.toggleEdit} />
        <Peeper
          label="Advanced Options"
          show={this.props.showAdvanced}
          togglePeeper={this.props.toggleShowAdvanced}
        >
          <div>
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
              {
                this.props.geoLevels['Level 1'].name ?
                  <tr>
                    <td>Approximately, how many hospitals serve at the national level?</td>
                    <td>{this.props.hospitals.level1.value}</td>
                    <td>Modify</td>
                  </tr>
                  : null
              }
              {
                this.props.geoLevels['Level 2'].name ?
                  <tr>
                    <td>Approximately, how many hospitals serve at the {this.props.geoLevels['Level 2'].name.toLowerCase()} level?</td>
                    <td>{this.props.hospitals.level1.value}</td>
                    <td>Modify</td>
                  </tr>
                  : null
              }
              {
                this.props.geoLevels['Level 3'].name ?
                  <tr>
                    <td>Approximately, how many hospitals serve at the {this.props.geoLevels['Level 3'].name.toLowerCase()} level?</td>
                    <td>{this.props.hospitals.level1.value}</td>
                    <td>Modify</td>
                  </tr>
                  : null
              }
              {
                this.props.geoLevels['Level 4'].name ?
                  <tr>
                    <td>Approximately, how many hospitals serve at the {this.props.geoLevels['Level 4'].name.toLowerCase()} level?</td>
                    <td>{this.props.hospitals.level1.value}</td>
                    <td>Modify</td>
                  </tr>
                  : null
              }
              <tr>
                <td>Approximately, how many community health centers are in your country?</td>
                <td>{this.props.hospitals.chc.value}</td>
                <td>Modify</td>
              </tr>
              </tbody>
            </table>
          </div>
        </Peeper>

      </div>
    )
  }

}
