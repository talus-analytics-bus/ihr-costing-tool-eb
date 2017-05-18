import { connect } from 'react-redux';
import { TableOfContents } from './TableOfContents';
import { goToCapacity } from '../../../../actions';

const mapStateToProps = (state) => {
  return {
    entries: state.assessment.jeeTree,
    active: state.assessment.active,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToCapacity: (core, capacity) => {
      dispatch(goToCapacity(core, capacity));
    }
  }
}

export const TableOfContentsActive = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableOfContents);
