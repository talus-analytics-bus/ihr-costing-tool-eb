import React, { Component } from 'react';

import styles from './AssessmentMain.css';
import {AssessmentDescription} from "./AssessmentDescription";
import {CapacityTable} from "./CapacityTable";
import RaisedButton from 'material-ui/RaisedButton';

export class AssessmentMain extends Component {


  render() {
    if (this.props.activeCapacity) {
      return (
        <div className={styles.assessmentMain}>
          <AssessmentDescription activeCapacity={this.props.activeCapacity} />
          <CapacityTable activeCapacity={this.props.activeCapacity} setActiveCapacityLevel={this.props.setActiveCapacityLevel}/>
          <div className={styles.assessmentAction}>
            <RaisedButton
              label="Next"
            />
          </div>
        </div>
      )
    }
    return <div></div>;
  }
}
