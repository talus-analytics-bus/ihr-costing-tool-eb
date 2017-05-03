import React, { Component } from 'react';

import { Api } from '../../data/api';
import { Sidebar} from '../../components/Sidebar/Sidebar';
import { TableOfContentsActive } from './components/TableOfContents/TableOfContentsActive';
import { AssessmentMainActive } from './components/AssessmentMain/AssessmentMainActive';

import styles from './Assessment.css';

export class Assessment extends Component {
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
                    ...expense,
                    editing: false,
                    selected: prev.length === 0 || prev.slice(-1)[0].expense_id !== expense.expense_id
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
