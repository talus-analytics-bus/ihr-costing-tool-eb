import React, { Component } from 'react';

import styles from './Home.scss';
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
            The International Health Regulations (IHR) set standards for national capacities needed to prevent,
            detect, and respond to public health threats. The recently adopted Joint External Evaluation Tool (JEE)
            is a voluntary external evaluation process using standardized indicators to measure
            country-specific progress in IHR implementation and help set goals for further capacity development.
            However, national leaders face significant challenges in accurately defining the costs to establish and
            maintain compliance with IHR and to assign costs to goals set using JEE results.</p>
          <p>
          This tool provides a framework to calculate costs for implementing and enhancing IHR core capacities.
          Costs are estimated by applying country-specific user input data to cost calculations developed using
          best practices for achieving the technical standards specified in the JEE.</p>
          <p>
          The goal of the IHR Costing Tool is to provide national leaders with realistic cost information to
          support practical planning for initial IHR compliance and sustainable capacity development to realize
          the objectives of the JEE process.</p>
        </div>

        <div className={styles.homeContinueContainer}>
          <RaisedButton
            primary={true}
            label="Enter"
            containerElement={<Link to="/instructions/" />}
          />
        </div>
      </div>
    )
  }
}
