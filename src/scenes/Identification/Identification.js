import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import styles from './Identification.css';
import Datamap from 'react-datamaps'

import { Api } from '../../data/api';

export class Identification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCountry: '',
      countries: [],
      currencies: {},
      activeCurrency: '',
    }
  }

  componentDidMount() {
    Api.fetchCountriesByAbbr()
      .then((countries) => {
        this.setState({
          countries,
          activeCountry: countries[0].country,
        });
      });
    Api.fetchCurrencies()
      .then((currencies) => {
        console.log(currencies);
        this.setState({
          currencies,
          activeCurrency: currencies[Object.keys(currencies)[0]].iso.code,

        });
      });
  }

  handleCountrySelect = (event, index, value) => this.setState({
    activeCountry: value,
  });

  handleCurrencySelect = (event, index, value) => this.setState({
    activeCurrency: value,
  });

  render() {
    return (
      <div className={styles.identification}>
        <div className={styles.countryPicker}>
          <h2>Create Your Profile</h2>
          <div className={styles.countryPickerContent}>
            <div className={styles.countryPickerSelect}>
              <div>
                <p>
                  What country would you like to assess and cost for?
                </p>
                <DropDownMenu value={this.state.activeCountry} onChange={this.handleCountrySelect}>
                  {
                    this.state.countries.map((country) => (
                      <MenuItem value={country.country} primaryText={country.country} />
                    ))
                  }
                </DropDownMenu>
              </div>
              <div>
                <p>
                  What currency would you like to work with?
                </p>
                <DropDownMenu value={this.state.activeCurrency} onChange={this.handleCurrencySelect}>
                  {
                    Object.keys(this.state.currencies)
                      .map((currencyKey) => (
                        <MenuItem value={currencyKey} primaryText={`${this.state.currencies[currencyKey].name} (${this.state.currencies[currencyKey].iso.code})`} />
                      ))
                  }
                </DropDownMenu>
              </div>
            </div>
            <div className={styles.countryPickerMap} id="map">
              <Datamap/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
