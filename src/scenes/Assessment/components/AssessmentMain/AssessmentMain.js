import React, { Component } from 'react';

import styles from './AssessmentMain.css';
import { AssessmentDescription } from './AssessmentDescription';
import { CapacityTable } from './CapacityTable';
import RaisedButton from 'material-ui/RaisedButton';
import { Costing } from './Costing';

export class AssessmentMain extends Component {


  render() {
    if (this.props.activeCapacity) {
      return (
        <div className={styles.assessmentMain}>
          <AssessmentDescription activeCapacity={this.props.activeCapacity} />
          {
            this.props.activeStage === 'assessment' ?
              <CapacityTable
                activeCapacity={this.props.activeCapacity}
                setActiveCapacityLevel={this.props.setActiveCapacityLevel}
                activeCountry={this.props.activeCountry}
              /> :
              <Costing
                activeCapacity={this.props.activeCapacity}
                activeCurrency={this.props.activeCurrency}
              />
          }
          <div className={styles.assessmentAction}>
            <RaisedButton
              className={styles.backButton}
              primary={true}
              label="Previous Capacity"
              onClick={() => this.props.prevStep(this.props.assessmentFirst)}
            />
             <RaisedButton
              className={styles.submitButton}
              primary={true}
              label="Next Capacity"
              onClick={() => this.props.nextStep(this.props.assessmentFirst)}
            />
          </div>
        </div>
      )
    }
    return <div></div>;
  }
}
