import React, { Component } from 'react';

import { Peeper } from '../../../../components/Peeper/Peeper'

import styles from './AssessmentMain.css';

export class AssessmentDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      as_measured_by: false,
      desired_impact: false,
      notes: false,
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
        <div>
          <p>
            <strong>Target: </strong>
            {this.props.activeCapacity.target_description}
          </p>
        </div>
        {
          this.props.activeCapacity.as_measured_by &&
          <Peeper
            label="How is this capacity measured?"
            show={this.state.as_measured_by}
            togglePeeper={() => this.handlePeeperToggle('as_measured_by')}
          >
            <p>{this.props.activeCapacity.as_measured_by}</p>
          </Peeper>
        }
        {
          this.props.activeCapacity.desired_impact &&
          <Peeper
            label="What are the desired outcomes of building this capacity?"
            show={this.state.desired_impact}
            togglePeeper={() => this.handlePeeperToggle('desired_impact')}
          >
            <p>{this.props.activeCapacity.desired_impact}</p>
          </Peeper>
        }
        {
          this.props.activeCapacity.notes &&
          <Peeper
            label="Additional notes"
            show={this.state.notes}
            togglePeeper={() => this.handlePeeperToggle('notes')}
          >
            <p>{this.props.activeCapacity.notes}</p>
          </Peeper>
        }
      </div>
    )
  }
}
