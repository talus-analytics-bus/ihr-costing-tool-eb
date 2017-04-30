import React, { Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from './CountryDetails.css'
import { GeoLevels } from '../GeoLevels/GeoLevels';
import { Peeper } from '../../../../components/Peeper/Peeper';

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
        </Peeper>

      </div>
    )
  }

}
