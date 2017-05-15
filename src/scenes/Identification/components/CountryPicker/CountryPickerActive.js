import { connect } from 'react-redux';
import { chooseCountry, setCountries, chooseCurrency, setCurrencies, setCountryMap, setCountryDetails } from '../../../../actions/index'
import { CountryPicker } from './CountryPicker';

const mapStateToProps = (state) => {
  return {
    hasSelected: state.identification.hasSelected,
    countries: state.data.countries,
    activeCountry: state.identification.country.key,
    currencies: state.data.currencies,
    activeCurrency: state.identification.currency.key,
    countryMap: state.data.countryMap,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCountrySelect: (country, currency, details, currencyDetails) => {
      dispatch(chooseCountry(country, details));
      dispatch(chooseCurrency(currency, currencyDetails));
      dispatch(setCountryDetails(details))
    },
    populateCountries: (countries) => {
      dispatch(setCountries(countries));
    },
    onCurrencySelect: (currency, details) => {
      dispatch(chooseCurrency(currency, details));
    },
    populateCurrencies: (currencies) => {
      dispatch(setCurrencies(currencies));
    },
    populateCountryMap: (countryMap) => {
      dispatch(setCountryMap(countryMap));
    },
  }
}

export const CountryPickerActive = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryPicker)
