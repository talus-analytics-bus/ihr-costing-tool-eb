import React, { Component } from 'react';

import styles from './AssessmentMain.scss';
import { Link } from 'react-router-dom';
import { AssessmentBreadcrumbs } from '../AssessmentBreadcrumbs/AssessmentBreadcrumbs';
import { AssessmentDescription } from './AssessmentDescription';
import { CapacityTable } from './CapacityTable';
import RaisedButton from 'material-ui/RaisedButton';
import { Costing } from './Costing';

export class AssessmentMain extends Component {
  render() {
    if (this.props.activeCapacity) {
      return (
        <div className={styles.assessmentMain}>
          <AssessmentBreadcrumbs
            activeCore={this.props.activeCore}
            activeCapacity={this.props.activeCapacity}
            activeStage={this.props.activeStage}
          />
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
            {
              // show only when there is previous capacity to go to
              this.props.hasPreviousCapacity &&
              <RaisedButton
                className={styles.actionButton}
                primary={true}
                label="Previous Capacity"
                onClick={() => this.props.prevCapacity()}
              />
            }
            {
              // show this button only when we are not in a costing stage
              this.props.activeStage !== 'costing' &&
              <RaisedButton
                className={styles.actionButton}
                primary={true}
                label="Proceed to Costing"
                onClick={() => this.props.proceedToCosting()}
              />
            }
            {
              // show only when there is next step to go to
              this.props.hasNextStep &&
              <RaisedButton
                className={styles.actionButton}
                primary={true}
                label="Next Step"
                onClick={() => this.props.nextStep(this.props.assessmentFirst)}
              />
            }
          </div>
          <div className={styles.resultsButtonContainer}>
            <RaisedButton
              className={styles.resultsButton}
              primary={true}
              label="Go to Results Page"
              containerElement={<Link to="/results/" />}
            />
          </div>
        </div>
      )
    }
    return <div></div>;
  }
}
