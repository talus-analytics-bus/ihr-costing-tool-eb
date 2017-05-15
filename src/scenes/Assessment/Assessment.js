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

export class Assessment extends Component {
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
                expenses: indicator.expenses.reduce((prev, expense) => {
                  return prev.concat([{
                    ...this.setDefaults(expense),
                    editing: false,
                    selected: false,//prev.length === 0 || prev.slice(-1)[0].expense_id !== expense.expense_id,
                    defaults: this.setDefaults(expense),
                  }])
                }, [])
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
