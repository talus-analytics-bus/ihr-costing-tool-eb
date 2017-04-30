const initialState = {
  data: {
    countries: [],
    currencies: [],
    countryMap: {},
  },
  identification: {
    country: '',
    currency: '',
    population: null,
    geo_levels: {
      'Level 1': {
        name: '',
        count: ''
      },
      'Level 2': {
        name: '',
        count: ''
      },
      'Level 3': {
        name: '',
        count: ''
      },
      'Level 4': {
        name: '',
        count: ''
      }
    },
    advanced: {
      show: false,
      staff: {
        epi_count: 0,
        chw_count: 0,
      },
      hospitals: {
        level1: 0,
        level2: 0,
        level3: 0,
        level4: 0,
        chc: 0,
      }
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
    case 'SET_COUNTRY_DETAILS':
      const advanced = Object.assign({}, state.identification.advanced, {
        staff: {
          epi_count: action.details.advanced_info.staff.national_epi_count,
          chw_count: action.details.advanced_info.staff.national_chw_count,
        },
        hospitals: {
          level1: action.details.advanced_info.hospitals.level_1_count,
          level2: action.details.advanced_info.hospitals.level_2_count,
          level3: action.details.advanced_info.hospitals.level_3_count,
          level4: action.details.advanced_info.hospitals.level_4_count,
          chc: action.details.advanced_info.hospitals.chc_count,
        }
      });

      const geoLevelMapping = {
        'level_1_areas': 'Level 1',
        'level_2_areas': 'Level 2',
        'level_3_areas': 'Level 3',
        'level_4_areas': 'Level 4',
      }

      identification = Object.assign({}, state.identification, {
        population: action.details.basic_info.population,
        geo_levels: Object.keys(geoLevelMapping)
          .reduce((prev, curr) => {
            prev[geoLevelMapping[curr]] = {
              name: action.details.basic_info[curr].area_name,
              count: action.details.basic_info[curr].area_count,
            }
            return prev;
          }, {}),
        advanced
      });
      return Object.assign({}, state, {
        identification,
      });
    default:
      return state;
  }

};
