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
          this.props.populateJeeTree(jeeTree.map((indicator, indicatorIndex) => ({
            ...indicator,
            active: indicatorIndex === 0,
            completed: false,
            capacities: (indicator.capacities || []).map((capacity, capacityIndex) => ({
              ...capacity,
              active: indicatorIndex + capacityIndex === 0,
              completed: false,
              indicators: capacity.indicators.map((ind) => ({
                ...ind,
                selectedLevel: null,
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
