import { connect } from 'react-redux';
import { chooseCountry, setCountries } from '../../../../actions'
import { CountryPicker } from '../CountryPicker/CountryPicker';

const mapStateToProps = (state) => {
  return {
    countries: state.data.countries,
    activeCountry: state.identification.country,
    currencies: state.data.currencies,
    activeCurrency: state.identification.activeCurrency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCountrySelect: (country) => {
      dispatch(chooseCountry(country));
    },
    populateCountries: (countries) => {
      dispatch(setCountries(countries));
    },
  }
}

export const CountryPickerActive = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryPicker)
