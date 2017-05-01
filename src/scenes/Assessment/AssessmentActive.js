import { connect } from 'react-redux';
import { setJeeTree } from '../../actions/index';
import { Assessment } from './Assessment';

const mapStateToProps = (state) => {
  return {
    jeeTree: state.assessment.jeeTree,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    populateJeeTree: (jeeTree) => {
      dispatch(setJeeTree(jeeTree));
    }
  }
}

export const AssessmentActive = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Assessment);
