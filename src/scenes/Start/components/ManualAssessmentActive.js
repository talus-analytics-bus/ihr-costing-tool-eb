import { connect } from 'react-redux';

import { ManualAssessment } from './ManualAssessment';
import { setAssessmentFirst } from '../../../actions';

const mapStateToProps = (state) => {
  return {
    manual: state.start.manual,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAssessmentFirst: (assessmentFirst) => {
      if (typeof assessmentFirst === 'string') {
        assessmentFirst = assessmentFirst === "true";
      }
      dispatch(setAssessmentFirst(assessmentFirst));
    }
  }
}

export const ManualAssessmentActive = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManualAssessment);