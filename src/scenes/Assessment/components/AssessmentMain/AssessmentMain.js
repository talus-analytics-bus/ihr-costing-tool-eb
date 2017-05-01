import React, { Component } from 'react';

import styles from './AssessmentMain.css';
import {AssessmentDescription} from "./AssessmentDescription";
import {CapacityTable} from "./CapacityTable";
import RaisedButton from 'material-ui/RaisedButton';
import { Costing } from './Costing';

export class AssessmentMain extends Component {


  render() {
    if (this.props.activeCapacity) {
      return (
        <div className={styles.assessmentMain}>
          <AssessmentDescription activeCapacity={this.props.activeCapacity} />
          {
            this.props.activeCapacity.stage === 'assessment' ?
              <CapacityTable activeCapacity={this.props.activeCapacity} setActiveCapacityLevel={this.props.setActiveCapacityLevel}/> :
              <Costing activeCapacity={this.props.activeCapacity} />
          }
          <div className={styles.assessmentAction}>
            <RaisedButton
              label="Next"
              onClick={this.props.nextStep}
            />
          </div>
        </div>
      )
    }
    return <div></div>;
  }
}
