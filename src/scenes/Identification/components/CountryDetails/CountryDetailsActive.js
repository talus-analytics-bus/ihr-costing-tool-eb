import { connect } from 'react-redux';
import { CountryDetails } from './CountryDetails'
import { toggleEdit, setCountryInfoValue, toggleShowAdvanced } from '../../../../actions';

const mapStateToProps = (state) => {
  return {
    population: state.identification.population,
    geoLevels: state.identification.geo_levels,
    showAdvanced: state.identification.advanced.show,
    staff: state.identification.advanced.staff,
    hospitals: state.identification.advanced.hospitals,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEdit: (target, editing, value) => {
      dispatch(toggleEdit(target))
    },
    setPopulation: (value) => {
      dispatch(setCountryInfoValue('population', value));
    },
    setStaff: (key, value) => {
      dispatch(setCountryInfoValue(key, value));
    },
    setGeoLevel: (target, value, type) => {
      dispatch(setCountryInfoValue(target, value, type))
    },
    toggleShowAdvanced: () => {
      dispatch(toggleShowAdvanced());
    }
  }
}

export const CountryDetailsActive = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryDetails);
