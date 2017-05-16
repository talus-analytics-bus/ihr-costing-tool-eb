import { connect } from 'react-redux';
import { setActiveCapacity, setActiveCapacityLevel, prevCapacity, nextStep, proceedToCosting } from '../../../../actions';
import { AssessmentMain } from './AssessmentMain';

// true unless it is the first
const hasPreviousCapacity = (state) => {
  const { core, capacity } = state.assessment.active;

  if (core === 0 && capacity === 0) {
    return false;
  }
  return true;
}

// true unless it is the last step
const hasNextStep = (state) => {
  const { core, capacity } = state.assessment.active;
  const maxCore = state.assessment.jeeTree.length - 1;
  const maxCapacity = maxCore > -1 ? state.assessment.jeeTree[maxCore].capacities.length - 1 : 0;

  if (core === maxCore && capacity === maxCapacity) {
    return false;
  }
  return true;
}

export const mapStateToProps = (state) => {
  return {
    activeCapacity: state.assessment.jeeTree.length > 0 ?
      state.assessment.jeeTree[state.assessment.active.core]
      .capacities[state.assessment.active.capacity] : null,
    hasPreviousCapacity: hasPreviousCapacity(state),
    hasNextStep: hasNextStep(state),
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
    prevCapacity: () => {
      dispatch(prevCapacity());
    },
    nextStep: (assessmentFirst) => {
      dispatch(nextStep(assessmentFirst));
    },
    proceedToCosting: () => {
      dispatch(proceedToCosting());
    }
  }
}

export const AssessmentMainActive = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssessmentMain);
