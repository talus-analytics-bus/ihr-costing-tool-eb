const initialState = {
  jeeTree: [],
  active: {
    core: 0,
    capacity: 0,
    stage: 'assessment',
  }
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
    case 'PREV_STEP':
      const prevToggle = [
        'assessment',
        'costing',
      ];

      if (action.assessmentFirst) {
        return {
          ...state,
          active: {
            core: state.active.capacity === 0 ? (state.active.core === 0 ? state.jeeTree.length - 1 : state.active.core - 1) : state.active.core,
            capacity: state.active.capacity === 0 ? state.jeeTree[state.active.core].capacities.length - 1 : state.active.capacity - 1,
            stage: state.active.stage === 'costing' ? 'costing' :
              (
                state.active.capacity === state.jeeTree[state.active.core].capacities.length - 1
                && state.active.core === state.jeeTree.length - 1
                && state.active.stage === 'assessment' ? 'costing' : 'assessment'
              )
          }
        }
      }

      return {
        ...state,
        active: {
          core: state.active.stage === 'assessment' ? state.active.core : (state.active.capacity === 0 ? state.jeeTree.length - 1 : state.active.core - 1),
          capacity: state.active.stage === 'assessment' ? state.active.capacity : (state.active.capacity === 0 ? state.jeeTree[state.active.core].capacities.length - 1 : state.active.capacity - 1),
          stage: prevToggle[1 - prevToggle.indexOf(state.active.stage)]
        }
      }
    case 'NEXT_STEP':
      const nextToggle = [
        'assessment',
        'costing',
      ];

      if (action.assessmentFirst) {
        return {
          ...state,
          active: {
            core: state.active.capacity === state.jeeTree[state.active.core].capacities.length - 1 ? (state.active.core === state.jeeTree.length - 1 ? 0 : state.active.core + 1) : state.active.core,
            capacity: state.active.capacity === state.jeeTree[state.active.core].capacities.length - 1 ? 0 : state.active.capacity + 1,
            stage: state.active.stage === 'costing' ? 'costing' :
              (
                state.active.capacity === state.jeeTree[state.active.core].capacities.length - 1
                && state.active.core === state.jeeTree.length - 1
                && state.active.stage === 'assessment' ? 'costing' : 'assessment'
              )
          }
        }
      }

      return {
        ...state,
        active: {
          core: state.active.stage === 'assessment' ? state.active.core : (state.active.capacity === state.jeeTree[state.active.core].capacities.length - 1 ? state.active.core + 1 : state.active.core),
          capacity: state.active.stage === 'assessment' ? state.active.capacity : (state.active.capacity === state.jeeTree[state.active.core].capacities.length - 1 ? 0 : state.active.capacity + 1),
          stage: nextToggle[1 - nextToggle.indexOf(state.active.stage)]
        }
      }
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
