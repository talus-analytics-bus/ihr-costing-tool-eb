import React, { Component } from 'react';

import { ScoreSummary } from './components/ScoreSummary';
import { CostSummary } from './components/CostSummary';

import styles from './Results.scss';

export class Results extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className={styles.results}>
      	<h1 className={styles.resultsTitle}>Results: Total Cost of Implementation Completed</h1>
        <ScoreSummary></ScoreSummary>
        <CostSummary></CostSummary>
      </div>
    )
  }
}
