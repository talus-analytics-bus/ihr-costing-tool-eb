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
      // if (editing) {
      //   dispatch(setCountryInfoValue(target, value));
      // }
    },
    setPopulation: (value) => {
      dispatch(setCountryInfoValue('population', value));
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
