const initialState = {
  hasSelected: false,
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
    error: '',
  },
  geo_levels: {
    'Level 1': {
      editing: false,
      name: '',
      value: null,
      error: '',
    },
    'Level 2': {
      editing: false,
      name: '',
      value: null,
      error: '',
    },
    'Level 3': {
      editing: false,
      name: '',
      value: null,
      error: '',
    },
    'Level 4': {
      editing: false,
      name: '',
      value: null,
      error: '',
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
    facilities: {
      value: 0,
      editing: false,
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
    case 'epi_count':
    case 'chw_count':
      return {
        ...state,
        advanced: {
          ...state.advanced,
          staff: {
            ...state.advanced.staff,
            [target]: {
              ...state.advanced.staff[target],
              editing: !state.advanced.staff[target].editing
            }
          }
        }
      }
    case 'facilities':
      return {
        ...state,
        advanced: {
          ...state.advanced,
          facilities: {
            ...state.advanced.facilities,
            editing: !state.advanced.facilities.editing
          }
        }
      }
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
    case 'epi_count':
    case 'chw_count':
      return {
        ...state,
        advanced: {
          ...state.advanced,
          staff: {
            ...state.advanced.staff,
            [target]: {
              ...state.advanced.staff[target],
              value,
            }
          }
        }
      }
    case 'facilities':
      return {
        ...state,
        advanced: {
          ...state.advanced,
          facilities: {
            ...state.advanced.facilities,
            value,
          }
        }
      }
    default:
      return state;
  }
}

export const identificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHOOSE_COUNTRY':
      return {
        ...state,
        hasSelected: true,
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
              editing: !Boolean(action.details.advanced_info.staff.national_epi_count),
              value: action.details.advanced_info.staff.national_epi_count
            },
            chw_count: {
              editing: !Boolean(action.details.advanced_info.staff.national_chw_count),
              value: action.details.advanced_info.staff.national_chw_count
            },
          },
          facilities: {
            editing: !Boolean(action.details.advanced_info.national_health_care_facilities_count),
            value: action.details.advanced_info.national_health_care_facilities_count,
          },
        },
        population: {
          value: action.details.basic_info.population,
          editing: !Boolean(action.details.basic_info.population),
        },
        geo_levels: Object.keys(geoLevelMapping)
          .reduce((prev, curr) => {
            prev[geoLevelMapping[curr]] = {
              name: action.details.basic_info[curr].area_name,
              value: action.details.basic_info[curr].area_count,
              editing: !Boolean(action.details.basic_info[curr].area_count)
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
    case 'VALIDATE_COUNTRY_INFO':
      const requiredErrorText = 'This field is required';

      return {
        ...state,
        geo_levels: {
          ...state.geo_levels,
          [action.target]: {
            ...state.geo_levels[action.target],
            editing: true,
            error: requiredErrorText,
          }
        }
      }
    default:
      return state;
  }
}
