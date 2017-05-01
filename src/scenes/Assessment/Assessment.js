import React, { Component } from 'react';

import { Api } from '../../data/api';
import { Sidebar} from '../../components/Sidebar/Sidebar';
import { TableOfContentsActive } from './components/TableOfContents/TableOfContentsActive';

import styles from './Assessment.css';

export class Assessment extends Component {
  componentDidMount() {
    if (this.props.jeeTree !== []) {
      Api.fetchJeeTree()
        .then((jeeTree) => {
          this.props.populateJeeTree(jeeTree.map((indicator) => ({
            ...indicator,
            active: false,
            completed: false,
            capacities: (indicator.capacities || []).map((capacity) => ({
              ...capacity,
              active: false,
              completed: false,
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
          <div>Hello</div>
        </div>
      </div>
    )
  }
}
