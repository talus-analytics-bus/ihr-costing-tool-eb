import { connect } from 'react-redux';
import { TableOfContents } from './TableOfContents';

const mapStateToProps = (state) => {
  return {
    entries: state.assessment.jeeTree,
  }
}

export const TableOfContentsActive = connect(
  mapStateToProps
)(TableOfContents);
