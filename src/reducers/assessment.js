const initialState = {
  jeeTree: []
}

export const assessmentReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_JEE_TREE':
      return {
        ...state,
        jeeTree: action.jeeTree,
      }
    case 'SET_ACTIVE_CAPACITY':
      if (action.capacityName === '' && state.assessment.jeeTree.length > 0) {
        return {
          ...state,
          jeeTree: [
            {
              ...state.jeeTree[0],
              active: true,
              capacities: [
                {
                  ...state.jeeTree[0].capacities[0],
                  active: true,
                },
                ...state.jeeTree[0].capacities.slice(1),
              ]
            },
            ...state.jeeTree.slice(1)
          ]
        }
      }
      return state;
    case 'SET_ACTIVE_CAPACITY_LEVEL':
      return {
        ...state,
        jeeTree: state.jeeTree.map((core) => ({
          ...core,
          capacities: core.capacities.map((capacity) => ({
            ...capacity,
            indicators: capacity.indicators.map((indicator) => ({
              ...indicator,
              selectedLevel: indicator.jee_id === action.indicator ? action.level : indicator.selectedLevel,
            }))
          }))
        }))
      };
    case 'NEXT_STEP':
      const toggle = [
        'assessment',
        'costing',
      ];

      return {
        ...state,
        jeeTree: state.jeeTree.map((core) => ({
          ...core,
          capacities: core.capacities.map((capacity) => ({
            ...capacity,
            stage: capacity.active ? toggle[1 - toggle.indexOf(capacity.stage)] : capacity.stage,
          }))
        }))
      };
    case 'TOGGLE_EDITING_EXPENSE':
      return {
        ...state,
        jeeTree: state.jeeTree.map((core) => ({
          ...core,
          capacities: core.capacities.map((capacity) => ({
            ...capacity,
            indicators: capacity.indicators.map((indicator) => ({
              ...indicator,
              expenses: indicator.expenses.map((expense) => ({
                ...expense,
                editing: expense.expense_id === action.expense_id && expense.sophistication_level.includes(action.sophistication_level) ? !expense.editing : expense.editing,
              }))
            }))
          }))
        }))
      }
    case 'UPDATE_EXPENSE_VALUES':
      return {
        ...state,
        jeeTree: state.jeeTree.map((core) => ({
          ...core,
          capacities: core.capacities.map((capacity) => ({
            ...capacity,
            indicators: capacity.indicators.map((indicator) => ({
              ...indicator,
              expenses: indicator.expenses.map((expense) => ({
                ...expense,
                ...action.values,
              }))
            }))
          }))
        }))
      }
    case 'SELECT_EXPENSE':
      const isSelected = ({expense_id, sophistication_level, selected}) => {
        if (expense_id === action.expense_id && sophistication_level.includes(action.sophistication_level)) {
          return true;
        }
        if (expense_id === action.expense_id) {
          return false;
        }
        return selected;
      }

      return {
        ...state,
        jeeTree: state.jeeTree.map((core) => ({
          ...core,
          capacities: core.capacities.map((capacity) => ({
            ...capacity,
            indicators: capacity.indicators.map((indicator) => ({
              ...indicator,
              expenses: indicator.expenses.map((expense) => ({
                ...expense,
                selected: isSelected(expense),
              }))
            }))
          }))
        }))
      }
    default:
      return state;
  }
}
