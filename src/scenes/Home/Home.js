import React, { Component } from 'react';

import styles from './Home.css';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <div className={[styles.homeCenterContents, styles.homeSection].join(' ')}>
          <h1>Welcome to the IHR Costing Tool</h1>
        </div>

        <div className={styles.homeSection}>
          <p>
            The International Health Regulations (IHR) Costing Tool is a tool intended to evaluate the costs for a country
            to upgrade its capacity to prevent, detect and rapidly respond to public health threats. The tool is based on
            the Joint External Evaluation (JEE) tool.
          </p>
        </div>

        <div className={[styles.homeSection, styles.homeCenterContents].join(' ')}>
          <RaisedButton
            label="Enter"
            containerElement={<Link to="/identification/" />}
          />
        </div>
      </div>
    )
  }
}
