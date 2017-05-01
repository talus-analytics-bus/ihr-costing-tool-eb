import React, { Component } from 'react';

import { Api } from '../../data/api';

import styles from './Assessment.css';

export class Assessment extends Component {
  componentDidMount() {
    if (this.props.jeeTree !== []) {
      Api.fetchJeeTree()
        .then((jeeTree) => {
          this.props.populateJeeTree(jeeTree);
        });
    }
  }

  render() {
    return (
      <div className={styles.assessment}>
      </div>
    )
  }
}
