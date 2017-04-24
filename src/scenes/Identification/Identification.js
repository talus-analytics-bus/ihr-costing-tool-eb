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
      console.log(countries);
        this.setState({
          countries,
          activeCountry: countries.find((country) => country.country === 'USA').country,
        });
      });
    Api.fetchCurrencies()
      .then((currencies) => {
        this.setState({
          currencies,
          activeCurrency: 'USD',
        });
      });
  }

  handleCountrySelect = (event, index, value) => {
    const country = this.state.countries.find((c) => c.country === value);
    const activeCurrency = Object.keys(this.state.currencies).find((currencyKey) => this.state.currencies[currencyKey].iso.code === country.currency_code);

    return this.setState({
      activeCountry: value,
      activeCurrency,
    });
  }

  handleCurrencySelect = (event, index, value) => {
    const activeCountry = this.state.countries.find((country) => country.currency_code === value);

    this.setState({
      activeCurrency: value,
      activeCountry: activeCountry.country,
    });
  }

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
