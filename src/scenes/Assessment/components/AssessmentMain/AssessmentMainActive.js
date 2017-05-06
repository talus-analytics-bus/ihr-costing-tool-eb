import { connect } from 'react-redux';
import { setActiveCapacity, setActiveCapacityLevel, nextStep } from '../../../../actions';
import { AssessmentMain } from './AssessmentMain';

export const mapStateToProps = (state) => {
  return {
    activeCapacity: state.assessment.jeeTree.length > 0 ?
      state.assessment.jeeTree[state.assessment.active.core]
      .capacities[state.assessment.active.capacity] : null,
    activeStage: state.assessment.active.stage,
    activeCountry: state.identification.country,
    activeCurrency: state.identification.currency,
    assessmentFirst: state.start.manual.assessmentFirst,
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
    nextStep: (assessmentFirst) => {
      dispatch(nextStep(assessmentFirst));
    }
  }
}

export const AssessmentMainActive = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssessmentMain);
