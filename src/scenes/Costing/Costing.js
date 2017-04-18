import React, { Component } from 'react';

import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import AVPlayArrow from 'material-ui/svg-icons/av/play-arrow';

import { Api } from '../../data/api';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { CapacityTable } from './components/CapacityTable/CapacityTable';

import styles from './Costing.css';

export class Costing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableOfContents: [],
      capacity: {
        columns: [],
        data: [],
      },
      open: false,
      peep1: false,
      peep2: false,
    };
  }

  componentDidMount() {
    Api.fetchTableOfContents()
      .then((tableOfContents) => {
        this.setState({
          tableOfContents,
        })
      });

    Api.fetchCapacityTable()
      .then((capacity) => {
        this.setState({
          capacity,
        });
      });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  peepHint = (key) => {
    this.setState({
      [key]: !this.state[key],
    });
  }

  render() {
    return (
      <div className={styles.costing}>
        <Sidebar contents={this.state.tableOfContents} />
        <div className={styles.content}>
          <h3>National Laboratory System</h3>
          <p>
            <strong>Target: </strong> Real-time biosurveillance with a national laboratory
            system and effective point-of-care and laboratory-based diagnostics.
          </p>
          <p className={styles.hint}>
            <div className={`${styles.peep} ${this.state.peep1 ? styles.peepActive: null}`} onTouchTap={() => this.peepHint('peep1')}>
              <AVPlayArrow/>
              <strong>How is this indicator measured?</strong>
            </div>
            {
              this.state.peep1 ?
                <div className={styles.hintText}>
                  Hello, world!
                </div>
                : null
            }
            <div className={`${styles.peep} ${this.state.peep2 ? styles.peepActive: null}`} onTouchTap={() => this.peepHint('peep2')}>
              <AVPlayArrow/>
              <strong>How does this indicator impact bio security?</strong>
            </div>
            {
              this.state.peep2 ?
                <div className={styles.hintText}>
                  Hello, world!
                </div>
                : null
            }
          </p>
          <Divider />
          <p>Choose the capacity that most closely aligns with Argentina's capacity.</p>
          <CapacityTable capacity={this.state.capacity} />
          <div className={styles.action}>
            <RaisedButton onTouchTap={this.handleTouchTap} label="Next"/>
          </div>
        </div>
        <Snackbar
          open={this.state.open}
          message="Go to next step"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    )
  }
}
