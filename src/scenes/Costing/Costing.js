import React, { Component } from 'react';

import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

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
          <ul>
            <li><strong>How is this indicator measured?</strong></li>
            <li><strong>How does this indicator impact bio security?</strong></li>
          </ul>
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
