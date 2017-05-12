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
          label="Capacity Information"
          show={this.state.showingDetails}
          togglePeeper={() => this.handlePeeperToggle('showingDetails')}
        >
          <div className={styles.assessmentDescriptionContent}>
            <div>
              <p>
                <b>Target: </b>
                {this.props.activeCapacity.target_description}
              </p>
            </div>
            {
              this.props.activeCapacity.as_measured_by
              ? <div>
                <p>
                  <b>How is this capacity measured? </b>
                  {this.props.activeCapacity.as_measured_by}
                </p>
              </div>
              : ''
            }
            {
              this.props.activeCapacity.desired_impact
              ? <div>
                <p>
                  <b>What are the desired outcomes of building this capacity? </b>
                  {this.props.activeCapacity.desired_impact}
                </p>
              </div>
              : ''
            }
            {
              this.props.activeCapacity.as_measured_by
              ? <div>
                <p>
                  <b>Additional notes: </b>
                  {this.props.activeCapacity.notes}
                </p>
              </div>
              : ''
            }
          </div>
        </Peeper>
      </div>
    )
  }
}
