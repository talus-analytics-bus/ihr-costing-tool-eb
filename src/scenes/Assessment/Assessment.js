import React, { Component } from 'react';

import { Api } from '../../data/api';
import { Sidebar} from '../../components/Sidebar/Sidebar';
import { TableOfContentsActive } from './components/TableOfContents/TableOfContentsActive';
import { AssessmentMainActive } from './components/AssessmentMain/AssessmentMainActive';

import styles from './Assessment.css';

export const capacityLevels = [
  'None',
  'Limited',
  'Developed',
  'Demonstrated',
  'Sustainable',
]

const geoLevelMapping = (name) => {
  const key = name.split('_').join(' ');

  return `${key.slice(0, 1).toUpperCase()}${key.slice(1)}`;
}

export class Assessment extends Component {
  getMultiplier = (key, expense) => {
    switch(key) {
      case 'area':
        console.log(expense.multiplier_area);
        if (typeof expense.multiplier_area === 'string') {
          console.log(expense.multiplier_area, geoLevelMapping(expense.multiplier_area), this.props.geo_levels[geoLevelMapping(expense.multiplier_area)])
          return (this.props.geo_levels[geoLevelMapping(expense.multiplier_area)] || {}).value;
        }
        return expense.multiplier_area;
      case 'staff':
        switch(expense.multiplier_staff) {
          case 'national_epi_count':
            return this.props.advanced.staff.epi_count.value;
          case 'national_chw_count':
            return this.props.advanced.staff.chw_count.value;
          default:
            return expense.multiplier_staff;
        }
      case 'facility':
        if (expense.multiplier_facility === 'national_health_care_facilities_count') {
          return this.props.advanced.facilities.value;
        }
        return expense.multiplier_facility;
      case 'population':
        if (expense.multiplier_population === 'population') {
          return this.props.population.value;
        }
        return expense.multiplier_population;
      case 'depreciation':
        return expense.multiplier_depreciation;
      default:
        return 0;
    }
  }

  setDefaults = (expense) => {
    const geoLevelMapping = (name) => {
      const key = name.split('_').join(' ');

      return `${key.slice(0, 1).toUpperCase()}${key.slice(1)}`;
    }

    return {
      ...expense,
      multiplier_staff: this.props.advanced.staff.epi_count.value || this.props.advanced.staff.chw_count,
      multiplier_health_capacity: this.props.advanced.hospitals[expense.multiplier_area ? expense.multiplier_area.split('_').join('') : 'chc'].value,
      multiplier_population: this.props.population.value,
      multiplier_area_name: this.props.geo_levels[geoLevelMapping(expense.multiplier_area)].name.toLowerCase(),
      multiplier_area_value: this.props.geo_levels[geoLevelMapping(expense.multiplier_area)].value,
    }
  }

  getValues = (expense) => ({
    cost: expense.cost || 0,
    duration: expense.cost_duration || 0,
    area: this.getMultiplier('area', expense),
    staff: this.getMultiplier('staff', expense),
    facility: this.getMultiplier('facility', expense),
    population: this.getMultiplier('population', expense),
    depreciation: this.getMultiplier('depreciation', expense),
  })

  componentDidMount() {
    if (this.props.jeeTree !== []) {
      Api.fetchJeeTree()
        .then((jeeTree) => {
          this.props.populateJeeTree(jeeTree.map((core, coreIndex) => ({
            ...core,
            active: coreIndex === 0,
            completed: false,
            capacities: (core.capacities || []).map((capacity, capacityIndex) => ({
              ...capacity,
              active: coreIndex + capacityIndex === 0,
              stage: 'assessment',
              completed: false,
              indicators: capacity.indicators.map((indicator) => ({
                ...indicator,
                selectedLevel: null,
                // expenses: indicator.expenses.reduce((prev, expense) => {
                //   return prev.concat([{
                //     // ...this.setDefaults(expense),
                //     ...expense,
                //     editing: false,
                //     selected: false,
                //     multipliers: this.getValues(expense),
                //     defaults: this.getValues(expense),
                //   }])
                // }, [])
                expenses: indicator.expenses.map((expense) => ({
                  ...expense,
                  editing: false,
                  selected: false,
                  multipliers: this.getValues(expense),
                  defaults: this.getValues(expense),
                }))
              }))
            }))
          })));
        });
    }
  }

  render() {
    return (
      <div className={styles.assessment}>
        <div className={styles.wrapper}>
          <Sidebar>
            <TableOfContentsActive/>
          </Sidebar>
          <AssessmentMainActive/>
        </div>
      </div>
    )
  }
}
