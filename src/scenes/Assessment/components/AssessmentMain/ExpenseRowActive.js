import { connect } from 'react-redux';
import { ExpenseRow } from './ExpenseRow';
import { toggleEditingExpense, updateExpenseValues, selectExpense } from '../../../../actions';

const mapStateToProps = (state) => {
  return {
    geo_levels: state.identification.geo_levels,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditingExpense: (expense_id, sophistication_level, sophistication_name) => {
      dispatch(toggleEditingExpense(expense_id, sophistication_level, sophistication_name))
    },
    changeValues: (expense_id, sophistication_level, sophistication_name, values) => {
      dispatch(updateExpenseValues(expense_id, sophistication_level, values));
      dispatch(toggleEditingExpense(expense_id, sophistication_level, sophistication_name));
      dispatch(selectExpense(expense_id, sophistication_level));
    },
    selectExpense: (expense_id, sophistication_level) => {
      dispatch(selectExpense(expense_id, sophistication_level));
    }
  }
}

export const ExpenseRowActive = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseRow);
