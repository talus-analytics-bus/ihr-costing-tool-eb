const initialState = {
  data: {
    countries: [],
    currencies: [],
    countryMap: [],
  },
  identification: {
    country: 'US',
    currency: 'USD',
    population: null,
    geo_levels: [
      0,
      0,
      0,
      0
    ],
    advanced: {
      show: false,
      epi_count: 0,
      chw_count: 0,
      hospitals_count: [

      ]
    }
  }
};

export const ihrApp = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'CHOOSE_COUNTRY':
      const identification = Object.assign({}, state.identification, {
        country: action.country,
      });
      return Object.assign({}, state, {
        identification,
      });
    case 'SET_COUNTRIES':
      const data = Object.assign({}, state.data, {
        countries: action.countries,
      })
      return Object.assign({}, state, {
        data,
      })
    default:
      return state;
  }

};
