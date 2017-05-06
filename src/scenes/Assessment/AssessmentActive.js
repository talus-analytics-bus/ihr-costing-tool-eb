import { connect } from 'react-redux';
import { setJeeTree } from '../../actions/index';
import { Assessment } from './Assessment';

const mapStateToProps = (state) => {
  return {
    jeeTree: state.assessment.jeeTree,
    population: state.identification.population,
    geo_levels: state.identification.geo_levels,
    advanced: state.identification.advanced,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    populateJeeTree: (jeeTree) => {
      dispatch(setJeeTree(jeeTree));
    },
  }
}

export const AssessmentActive = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Assessment);
