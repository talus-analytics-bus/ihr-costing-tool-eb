import React, { Component } from 'react';

import styles from './CountryPicker.css';
import {CountryDropdown} from "../CountryDropdown/CountryDropdown";
import {CurrencyDropdown} from "../CurrencyDropdown/CurrencyDropdown";
import { Api } from '../../../../data/api';

import {MapPicker} from "../MapPicker/MapPicker";

export class CountryPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCountry: '',
      countries: [],
      currencies: [],
      activeCurrency: '',
      activeCountryShort: {},
      countryMap: {},
    }
  }

  componentDidMount() {
    Api.fetchCountriesByAbbr()
      .then((countries) => {
        this.setState({
          countries,
          activeCountry: 'USA',
        });
      });
    Api.fetchCurrencies()
      .then((currencies) => {
        this.setState({
          currencies,
          activeCurrency: 'USD',
        });
      });
    Api.fetchMap()
      .then((countryMap) => {
        this.setState({countryMap});
      });
  }

  handleCountrySelect = (event, index, value) => {
    const country = this.state.countries.find((c) => c.country === value);
    const activeCurrency = this.state.currencies.find((currency) => currency.key === country.currency_code).key;
    const activeCountryShort = {
      [country.code]: {
        fillKey: 'active',
      }
    }

    this.setState({
      activeCountry: value,
      activeCurrency,
      activeCountryShort,
    });
  }

  handleCurrencySelect = (event, index, value) => {
    this.setState({
      activeCurrency: value,
    });
  }

  handleMapPickCountry = (countryCode) => {
    const country = this.state.countries.find((c) => c.code === countryCode);
    const activeCurrency = this.state.currencies.find((currency) => currency.key === country.currency_code).key;
    const activeCountryShort = {
      [countryCode]: {
        fillKey: 'active',
      }
    }

    this.setState({
      activeCountry: country.country,
      activeCurrency,
      activeCountryShort,
    });
  }

  render() {
    return (
      <div className={styles.countryPicker}>
        <h2>Create Your Profile</h2>
        <div className={styles.countryPickerContent}>
          <div className={styles.countryPickerSelect}>
            <CountryDropdown
              handleChange={this.handleCountrySelect}
              countries={this.state.countries}
              active={this.state.activeCountry}
            />
            <CurrencyDropdown
              handleChange={this.handleCurrencySelect}
              currencies={this.state.currencies}
              active={this.state.activeCurrency}
            />
          </div>

          <MapPicker
            activeCountry={Object.keys(this.state.activeCountryShort)[0]}
            countryMap={this.state.countryMap}
            handleChange={this.handleMapPickCountry}
          />
        </div>
      </div>
    )
  }
}
