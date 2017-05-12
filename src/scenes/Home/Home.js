import React, { Component } from 'react';

import styles from './Home.css';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <div className={styles.homeContainer}>
        <div className={styles.homeTitle}>
          <h1>Welcome to the IHR Costing Tool</h1>
        </div>

        <div className={styles.homeImageContainer}>
        </div>

        <div className={styles.homeContent}>
          <p>
            The International Health Regulations (IHR) Costing Tool supports countries in estimating the  
            costs of fully implement IHR core capacities to prevent, detect, and respond to public health threats.
            The IHR Costing Tool aligns costs with indicators specified by the 
            International Health Regulations Joint External Evaluation tool (JEE).
          </p>
        </div>

        <div className={styles.homeContinueContainer}>
          <RaisedButton
            primary={true}
            label="Enter"
            containerElement={<Link to="/identification/" />}
          />
        </div>
      </div>
    )
  }
}
