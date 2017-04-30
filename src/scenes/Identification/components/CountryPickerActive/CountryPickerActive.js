import { connect } from 'react-redux';
import { chooseCountry, setCountries, chooseCurrency, setCurrencies, setCountryMap, setCountryDetails } from '../../../../actions'
import { CountryPicker } from '../CountryPicker/CountryPicker';

const mapStateToProps = (state) => {
  return {
    countries: state.data.countries,
    activeCountry: state.identification.country,
    currencies: state.data.currencies,
    activeCurrency: state.identification.currency,
    countryMap: state.data.countryMap,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCountrySelect: (country, currency, details) => {
      console.log(details);
      dispatch(chooseCountry(country));
      dispatch(chooseCurrency(currency));
      dispatch(setCountryDetails(details))
    },
    populateCountries: (countries) => {
      dispatch(setCountries(countries));
    },
    onCurrencySelect: (currency) => {
      dispatch(chooseCurrency(currency));
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
