import React, { Component } from 'react';

import { ManualAssessmentActive } from './components/ManualAssessmentActive';

import styles from './Start.css';

export class Start extends Component {
  render() {
    return (
      <div className={styles.start}>
        <ManualAssessmentActive/>
      </div>
    )
  }
}