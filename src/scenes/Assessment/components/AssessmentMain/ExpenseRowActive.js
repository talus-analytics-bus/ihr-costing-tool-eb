import { connect } from 'react-redux';
import { ExpenseRow } from './ExpenseRow';
import { toggleEditingExpense } from '../../../../actions';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditingExpense: (expense_id, sophistication_level) => {
      dispatch(toggleEditingExpense(expense_id, sophistication_level))
    }
  }
}

export const ExpenseRowActive = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseRow);
