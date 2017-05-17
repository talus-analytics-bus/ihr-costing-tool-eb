import React, { Component } from 'react';

import { ScoreSummary } from './components/ScoreSummary';
import { CostSummary } from './components/CostSummary';

import styles from './Results.scss';

export class Results extends Component {
  render() {
    return (
      <div className={styles.results}>
      	<h1 className={styles.resultsTitle}>Results</h1>
        <ScoreSummary></ScoreSummary>
        <CostSummary></CostSummary>
      </div>
    )
  }
}
