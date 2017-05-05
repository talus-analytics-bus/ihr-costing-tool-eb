import { connect } from 'react-redux';
import { ExpenseRow } from './ExpenseRow';
import { toggleEditingExpense, updateExpenseValues } from '../../../../actions';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditingExpense: (expense_id, sophistication_level) => {
      dispatch(toggleEditingExpense(expense_id, sophistication_level))
    },
    changeValues: (expense_id, sophistication_level, values) => {
      dispatch(updateExpenseValues(expense_id, sophistication_level, values));
      dispatch(toggleEditingExpense(expense_id, sophistication_level));
    }
  }
}

export const ExpenseRowActive = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseRow);
