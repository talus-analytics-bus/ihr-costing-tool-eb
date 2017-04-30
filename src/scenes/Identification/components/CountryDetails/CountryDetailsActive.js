import { connect } from 'react-redux';
import { CountryDetails } from './CountryDetails'

const mapStateToProps = (state) => {
  return {
    population: state.identification.population,
    geoLevels: state.identification.geo_levels,
    staff: state.identification.advanced.staff,
    hospitals: state.identification.advanced.hospitals,
  }
}

export const CountryDetailsActive = connect(
  mapStateToProps,
)(CountryDetails);
