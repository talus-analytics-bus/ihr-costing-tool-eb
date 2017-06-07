import React, { Component } from 'react';

import styles from './CountryPicker.css';
import {CountryDropdown} from "../CountryDropdown/CountryDropdown";
import {CurrencyDropdown} from "../CurrencyDropdown/CurrencyDropdown";
import { Api } from '../../../../data/api';

import {MapPicker} from "../MapPicker/MapPicker";

export class CountryPicker extends Component {
  componentDidMount() {
    // check if country selection has already been made
    if (!this.props.hasSelected) {
      // fetch data from backend and populate state
      Promise.all([
        Api.fetchCountries()
          .then((countries) => {
            this.props.populateCountries(countries);
          }),
        Api.fetchCurrencies()
          .then((currencies) => {
            this.props.populateCurrencies(currencies);
          }),
        Api.fetchMap()
          .then((countryMap) => {
            this.props.populateCountryMap(countryMap);
          }),
      ])
        .then(() => {
          this.selectCountry('CH');
        })
    }
  }

  getCurrencyOfCountry = (countryCode) => {
    const country = this.props.countries.find((c) => c.abbreviation === countryCode);

    return this.props.currencies
      .find((currency) => currency.key === country.currency).key;
  }

  getCountryDetails = (countryCode) => {
    return this.props.countries.find((c) => c.abbreviation === countryCode);
  }

  getCurrencyDetails = (currency) => {
    return this.props.currencies.find((curr) => curr.key === currency);
  }

  selectCountry = (countryCode) => {
    const currency = this.getCurrencyOfCountry(countryCode);

    this.props.onCountrySelect(countryCode, currency, this.getCountryDetails(countryCode), this.getCurrencyDetails(currency));
  }

  render() {
    return (
      <div className={styles.countryPicker}>
        <h1>Customize for Costing</h1>
        <h4>Costs associated with implementing the International Health Regulations depend on the country,
        population size, geopolitical organization, and public health infrastructure.
        Review and complete the information below for use by the costing calculations.
        Default values are provided, where available, and can be changed using the MODIFY button.
        Complete all required blanks by entering the correct value and clicking SAVE.
        </h4>
        <div className={styles.countryPickerContent}>
          <div className={styles.countryPickerSelect}>
            <CountryDropdown
              handleChange={this.selectCountry}
              countries={this.props.countries}
              active={this.props.activeCountry}
            />
            <CurrencyDropdown
              handleChange={(currency) => this.props.onCurrencySelect(currency, this.getCurrencyDetails(currency))}
              currencies={this.props.currencies}
              active={this.props.activeCurrency}
            />
          </div>

          <MapPicker
            activeCountry={this.props.activeCountry}
            countryMap={this.props.countryMap}
            handleChange={this.selectCountry}
          />
        </div>
      </div>
    )
  }
}
