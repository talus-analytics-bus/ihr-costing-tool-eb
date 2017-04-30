const initialState = {
  data: {
    countries: [],
    currencies: [],
    countryMap: {},
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
  let data, identification;
  switch (action.type) {
    case 'CHOOSE_COUNTRY':
      identification = Object.assign({}, state.identification, {
        country: action.country,
      });
      return Object.assign({}, state, {
        identification,
      });
    case 'SET_COUNTRIES':
      data = Object.assign({}, state.data, {
        countries: action.countries,
      })
      return Object.assign({}, state, {
        data,
      })
    case 'CHOOSE_CURRENCY':
      identification = Object.assign({}, state.identification, {
        currency: action.currency,
      });
      return Object.assign({}, state, {
        identification,
      });
    case 'SET_CURRENCIES':
       data = Object.assign({}, state.data, {
        currencies: action.currencies,
      })
      return Object.assign({}, state, {
        data,
      })
    case 'SET_COUNTRY_MAP':
      data = Object.assign({}, state.data, {
        countryMap: action.countryMap,
      })
      return Object.assign({}, state, {
        data,
      })
    default:
      return state;
  }

};
