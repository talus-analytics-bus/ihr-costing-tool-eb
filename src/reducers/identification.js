const initialState = {
  country: {
    key: '',
    details: {}
  },
  currency: {
    key: '',
    details: {},
  },
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
      epi_count: {
        value: 0,
        editing: false,
      },
      chw_count: {
        value: 0,
        editing: false,
      },
    },
    hospitals: {
      level1: {
        value: 0,
        editing: false,
      },
      level2: {
        value: 0,
        editing: false,
      },
      level3: {
        value: 0,
        editing: false,
      },
      level4: {
        value: 0,
        editing: false,
      },
      chc: {
        value: 0,
        editing: false,
      },
    }
  }
};

const editTargets = (state, target) => {
  const geoLevel = (s, key) => {
    return {
      ...state,
      geo_levels: {
        ...state.geo_levels,
        [key]: {
          ...state.geo_levels[key],
          editing: !state.geo_levels[key].editing,
        }
      }
    }
  }
  switch (target) {
    case 'population':
      return {
        ...state,
        population: {
          ...state.population,
          editing: !state.population.editing
        }
      }
    case 'Level 1':
    case 'Level 2':
    case 'Level 3':
    case 'Level 4':
      return geoLevel(state, target);
    default:
      return state;
  }
}

const saveTargets = (state, target, value, type) => {
  const geoLevel = (s, key, v) => {
    return {
      ...state,
      geo_levels: {
        ...state.geo_levels,
        [key]: {
          ...state.geo_levels[key],
          [type]: v,
        }
      }
    }
  };
  switch (target) {
    case 'population':
      return {
        ...state,
        population: {
          ...state.population,
          value,
        }
      }
    case 'Level 1':
    case 'Level 2':
    case 'Level 3':
    case 'Level 4':
      return geoLevel(state, target, value);
    default:
      return state;
  }
}

export const identificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHOOSE_COUNTRY':
      return {
        ...state,
        country: {
          key: action.country,
          details: action.details,
        }
      }
    case 'CHOOSE_CURRENCY':
      return {
        ...state,
        currency: {
          key: action.currency,
          details: action.details,
        },
      }
    case 'SET_COUNTRY_DETAILS':
      const geoLevelMapping = {
        'level_1_areas': 'Level 1',
        'level_2_areas': 'Level 2',
        'level_3_areas': 'Level 3',
        'level_4_areas': 'Level 4',
      }

      return {
        ...state,
        advanced: {
          staff: {
            epi_count: {
              editing: false,
              value: action.details.advanced_info.staff.national_epi_count
            },
            chw_count: {
              editing: false,
              value: action.details.advanced_info.staff.national_chw_count
            },
          },
          hospitals: {
            level1: {
              editing: false,
              value: action.details.advanced_info.hospitals.level_1_count
            },
            level2: {
              editing: false,
              value: action.details.advanced_info.hospitals.level_2_count
            },
            level3: {
              editing: false,
              value: action.details.advanced_info.hospitals.level_3_count
            },
            level4: {
              editing: false,
              value: action.details.advanced_info.hospitals.level_4_count
            },
            chc: {
              editing: false,
              value: action.details.advanced_info.hospitals.chc_count
            },
          },
        },
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
      }
    case 'TOGGLE_EDIT':
      return editTargets(state, action.target);
    case 'SET_COUNTRY_INFO_VALUE':
      return saveTargets(state, action.target, action.value, action.valueType);
    case 'TOGGLE_SHOW_ADVANCED':
      return {
        ...state,
        advanced: {
          ...state.advanced,
          show: !state.advanced.show,
        }
      }
    default:
      return state;
  }
}
