const initialState = {
  manual: {
    assessmentFirst: false,
  }
}

export const startReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_ASSESSMENT_FIRST':
      return {
        ...state,
        manual: {
          ...state.manual,
          assessmentFirst: action.assessmentFirst,
        }
      }
    default:
      return state;
  }
}
