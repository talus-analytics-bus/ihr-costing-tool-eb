import { connect } from 'react-redux';
import { setActiveCapacity, setActiveCapacityLevel, prevStep, nextStep } from '../../../../actions';
import { AssessmentMain } from './AssessmentMain';

export const mapStateToProps = (state) => {
  return {
    activeCore: state.assessment.jeeTree[state.assessment.active.core],
    activeCapacity: state.assessment.jeeTree.length > 0 ?
      state.assessment.jeeTree[state.assessment.active.core]
      .capacities[state.assessment.active.capacity] : null,
    activeStage: state.assessment.active.stage,
    activeCountry: state.identification.country,
    activeCurrency: state.identification.currency,
    assessmentFirst: state.start.manual.assessmentFirst,
  }
}

const scrollToTop = () => window.scrollTo(0, 0);

export const mapDispatchToProps = (dispatch) => {
  return {
    setActiveCapacity: (capacityName) => {
      dispatch(setActiveCapacity(capacityName));
    },
    setActiveCapacityLevel: (indicator, level) => {
      dispatch(setActiveCapacityLevel(indicator, level));
    },
    prevStep: () => {
      dispatch(prevStep());
      scrollToTop();
    },
    nextStep: (assessmentFirst) => {
      dispatch(nextStep(assessmentFirst));
      scrollToTop();
    },
  }
}

export const AssessmentMainActive = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssessmentMain);
