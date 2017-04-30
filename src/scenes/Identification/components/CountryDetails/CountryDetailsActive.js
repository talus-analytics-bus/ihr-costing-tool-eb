import { connect } from 'react-redux';
import { CountryDetails } from './CountryDetails'
import { toggleEdit, setCountryInfoValue } from '../../../../actions';

const mapStateToProps = (state) => {
  return {
    population: state.identification.population,
    geoLevels: state.identification.geo_levels,
    staff: state.identification.advanced.staff,
    hospitals: state.identification.advanced.hospitals,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEdit: (target, editing, value) => {
      dispatch(toggleEdit(target))
      if (editing) {
        dispatch(setCountryInfoValue(target, value));
      }
    }
  }
}

export const CountryDetailsActive = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryDetails);
