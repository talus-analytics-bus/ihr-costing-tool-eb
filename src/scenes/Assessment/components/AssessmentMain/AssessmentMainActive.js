import { connect } from 'react-redux';
import { setActiveCapacity } from '../../../../actions';
import { AssessmentMain } from './AssessmentMain';

export const mapStateToProps = (state) => {
  return {
    activeCapacity: ((state.assessment.jeeTree
      .find((indicator) => indicator.active) || {}).capacities || [])
      .find((capacity) => capacity.active)
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    setActiveCapacity: (capacityName) => {
      dispatch(setActiveCapacity(capacityName));
    }
  }
}

export const AssessmentMainActive = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssessmentMain);
