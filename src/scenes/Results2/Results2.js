import React, { Component } from 'react';
import { App } from './components/results-charts.js';
// import * as utils from './components/results-charts.js'
// import App from './components/results-charts.js'
// import { CostSummary } from './components/CostSummary2';

// import scss
import styles from './Results2.scss';

export class Results2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    App.initBulletChart('.bullet');
    App.initBarChart('.barChart');
  };

  render() {
    return (
      <div className={styles.results}>
      	<h1>Results</h1>
          <h2>Progress toward IHR compliance</h2>
          <p><i>Cumulative progress towards Demonstrated/Sustainable Capacity across all indicators:</i></p>
            <div className={styles.bulletChart}>
              <svg className="bullet" width='200' height='100'>
                <defs>
                  <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
                    <rect x="-1" y="-1" width="6" height="6" style={{fill:'lightsteelblue', stroke:'none'}}/>
                    <path d="M-1,1 l2,-2, M0,4 l4,-4, M3,5 l2,-2" style={{stroke:'black', 'strokeWidth':0.5}}/>
                  </pattern>
                </defs>
              </svg>
            </div>
          <h2>Breakdown of implementation costs</h2>
          
      </div>
    )
  }
}