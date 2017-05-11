import React, { Component } from 'react';

import { Peeper } from '../../../../components/Peeper/Peeper'

import styles from './AssessmentMain.css';

export class AssessmentDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingDetails: false,
    }
  }

  handlePeeperToggle = (key) => {
    this.setState({
      [key]: !this.state[key],
    })
  }

  render() {
    return (
      <div className={styles.assessmentDescription}>
        <h2>{this.props.activeCapacity.name}</h2>
        <Peeper
          label="Details"
          show={this.state.showingDetails}
          togglePeeper={() => this.handlePeeperToggle('showingDetails')}
        >
          <div>
            <p>
              <strong>Target: </strong>
              {this.props.activeCapacity.target_description}
            </p>
          </div>
          {
            this.props.activeCapacity.as_measured_by
            ? <div>
              <p>
                <strong>How is this capacity measured? </strong>
                {this.props.activeCapacity.as_measured_by}
              </p>
            </div>
            : ''
          }
          {
            this.props.activeCapacity.desired_impact
            ? <div>
              <p>
                <strong>What are the desired outcomes of building this capacity? </strong>
                {this.props.activeCapacity.desired_impact}
              </p>
            </div>
            : ''
          }
          {
            this.props.activeCapacity.as_measured_by
            ? <div>
              <p>
                <strong>Additional notes: </strong>
                {this.props.activeCapacity.notes}
              </p>
            </div>
            : ''
          }
        </Peeper>
      </div>
    )
  }
}
