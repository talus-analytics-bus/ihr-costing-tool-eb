import { connect } from 'react-redux';
import { Identification } from './Identification';
import { validateCountryInfo } from '../../actions'

const mapStateToProps = (state) => {
  return {
    geoLevels: state.identification.geo_levels,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    validate: (target) => {
      dispatch(validateCountryInfo(target));
    }
  };
};

export const IdentificationActive = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Identification);
