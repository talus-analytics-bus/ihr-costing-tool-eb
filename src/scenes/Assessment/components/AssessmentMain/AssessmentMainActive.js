import { connect } from 'react-redux';
import { setActiveCapacity, setActiveCapacityLevel, nextStep } from '../../../../actions';
import { AssessmentMain } from './AssessmentMain';

export const mapStateToProps = (state) => {
  return {
    activeCapacity: ((state.assessment.jeeTree
      .find((core) => core.active) || {}).capacities || [])
      .find((capacity) => capacity.active),
    activeCountry: state.identification.country,
    activeCurrency: state.identification.currency,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    setActiveCapacity: (capacityName) => {
      dispatch(setActiveCapacity(capacityName));
    },
    setActiveCapacityLevel: (indicator, level) => {
      dispatch(setActiveCapacityLevel(indicator, level));
    },
    nextStep: () => {
      dispatch(nextStep());
    }
  }
}

export const AssessmentMainActive = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssessmentMain);
