const initialState = {
  countries: [],
  currencies: [],
  countryMap: {},
};

export const dataReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_COUNTRIES':
      return {
        ...state,
        countries: action.countries,
      }
    case 'SET_CURRENCIES':
      return {
        ...state,
        currencies: action.currencies,
      }
    case 'SET_COUNTRY_MAP':
      return {
        ...state,
        countryMap: action.countryMap,
      }
    default:
      return state;
  }
}
