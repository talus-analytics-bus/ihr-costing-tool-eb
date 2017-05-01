const initialState = {
  data: {
    countries: [],
    currencies: [],
    countryMap: {},
  },
  identification: {
    country: '',
    currency: '',
    population: {
      editing: false,
      value: null,
    },
    geo_levels: {
      'Level 1': {
        editing: false,
        name: '',
        value: null
      },
      'Level 2': {
        editing: false,
        name: '',
        value: null
      },
      'Level 3': {
        editing: false,
        name: '',
        value: null
      },
      'Level 4': {
        editing: false,
        name: '',
        value: null
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
  },
  start: {
    manual: {
      assessmentFirst: true,
    }
  },
  assessment: {
    jeeTree: []
  }
};

const editTargets = (state, target) => {
  const geoLevel = (s, key) => {
    return {...state, identification: {
      ...state.identification,
      geo_levels: {
        ...state.identification.geo_levels,
        [key]: {
          ...state.identification.geo_levels[key],
          editing: !state.identification.geo_levels[key].editing,
        }
      }
    }}
  }
  switch (target) {
    case 'population':
      return {...state, identification: {
        ...state.identification,
        population: {
          ...state.identification.population,
          editing: !state.identification.population.editing
        }
      }}
    case 'geo_Level 1':
    case 'geo_Level 2':
    case 'geo_Level 3':
    case 'geo_Level 4':
      const prefix = 'geo_'
      const key = target.slice(target.indexOf(prefix) + prefix.length);

      return geoLevel(state, key);
    default:
      return state;
  }
}

const saveTargets = (state, target, value) => {
  const geoLevel = (s, key, v) => {
    return {...state, identification: {
      ...state.identification,
      geo_levels: {
        ...state.identification.geo_levels,
        [key]: {
          ...state.identification.geo_levels[key],
          value: v,
        }
      }
    }}
  }
  switch (target) {
    case 'population':
      return {
        ...state, identification: {
          ...state.identification,
          population: {
            ...state.identification.population,
            value,
          }
        }
      }
    case 'geo_Level 1':
    case 'geo_Level 2':
    case 'geo_Level 3':
    case 'geo_Level 4':
      const prefix = 'geo_'
      const key = target.slice(target.indexOf(prefix) + prefix.length);

      return geoLevel(state, key, value);
    default:
      return state;
  }
}

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
        population: {
          value: action.details.basic_info.population,
          editing: false,
        },
        geo_levels: Object.keys(geoLevelMapping)
          .reduce((prev, curr) => {
            prev[geoLevelMapping[curr]] = {
              name: action.details.basic_info[curr].area_name,
              value: action.details.basic_info[curr].area_count,
            }
            return prev;
          }, {}),
        advanced
      });
      return Object.assign({}, state, {
        identification,
      });
    case 'TOGGLE_EDIT':
      return editTargets(state, action.target);
    case 'SET_COUNTRY_INFO_VALUE':
      return saveTargets(state, action.target, action.value);
    case 'TOGGLE_SHOW_ADVANCED':
      return {
        ...state,
        identification: {
          ...state.identification,
          advanced: {
            ...state.identification.advanced,
            show: !state.identification.advanced.show,
          }
        }
      }
    case 'SET_ASSESSMENT_FIRST':
      return {
        ...state,
        start: {
          ...state.start,
          manual: {
            ...state.start.manual,
            assessmentFirst: action.assessmentFirst,
          }
        }
      }
    case 'SET_JEE_TREE':
      return {
        ...state,
        assessment: {
          ...state.assessment,
          jeeTree: action.jeeTree,
        }
      }
    case 'SET_ACTIVE_CAPACITY':
      console.log(state, action.capacityName);
      if (action.capacityName === '' && state.assessment.jeeTree.length > 0) {
        console.log(state.assessment.jeeTree)
        console.log({
          ...state,
          assessment: {
            ...state.assessment,
            jeeTree: [
              {
                ...state.assessment.jeeTree[0],
                active: true,
                capacities: [
                  {
                    ...state.assessment.jeeTree[0].capacities[0],
                    active: true,
                  },
                  ...state.assessment.jeeTree[0].capacities.slice(1),
                ]
              },
              ...state.assessment.jeeTree.slice(1)
            ]
          }
        })
        return {
          ...state,
          assessment: {
            ...state.assessment,
            jeeTree: [
              {
                ...state.assessment.jeeTree[0],
                active: true,
                capacities: [
                  {
                    ...state.assessment.jeeTree[0].capacities[0],
                    active: true,
                  },
                  ...state.assessment.jeeTree[0].capacities.slice(1),
                ]
              },
              ...state.assessment.jeeTree.slice(1)
            ]
          }
        }
      }
      return state;
    default:
      return state;
  }

};
