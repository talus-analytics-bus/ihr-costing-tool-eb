import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from './GeoLevels.css';
import { geoLevels, labels } from './GeoLevels.constants';

export class GeoLevels extends Component {
  constructor(props) {
    super(props);

    this.state = geoLevels.reduce((prev, level) => {
      prev[level] = null;
      return prev;
    }, {});
  }

  handleChange = (event, key) => {
    this.setState({
      [key]: event.target.value,
    })
  }

  geoLevel = (key, index) => {
    return (
      <div className={styles.geoLevel} key={index}>
        <div className={styles.geoLevelRow}>
          <p>{labels[key]}</p>
        </div>
        <div className={styles.geoLevelName}>
          {
            !this.props.geoLevels[key].editing && (
              <p>{ this.props.geoLevels[key].name }</p>
            )
          }
          {
            this.props.geoLevels[key].editing && (
              <TextField defaultValue={this.props.geoLevels[key].name} onChange={(e) => this.handleChange(e, key)}/>
            )
          }
        </div>
        <div className={styles.geoLevelCount}>
          {
          !this.props.geoLevels[key].editing && (
            <p
              className={styles.geoLevelCountNumber}
            >
              { this.props.geoLevels[key].value && Number(this.props.geoLevels[key].value).toLocaleString() }
            </p>
          )
        }
        {
          this.props.geoLevels[key].editing && (
            <TextField defaultValue={this.props.geoLevels[key].value || 0} onChange={(e) => this.handleChange(e, key)}/>
          )
        }
        </div>
        <div className={styles.geoLevelAction}>
          <RaisedButton
            className={styles.geoLevelActionButton}
            label={this.props.geoLevels[key].editing ? 'Save' : 'Modify'}
            onClick={() => this.props.toggleEdit(`geo_${key}`, this.props.geoLevels[key].editing, this.state[key])}
          />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.geoLevels}>
        <div className={styles.geoLevelsTitle}>Geographic Level</div>
        <div className={`${styles.geoLevel} ${styles.geoLevelHeadings}`}>
          <div className={styles.geoLevelRow}>
            <p>Geographic Level</p>
          </div>
          <div className={styles.geoLevelName}>
            <p>Name</p>
          </div>
          <div className={styles.geoLevelCount}>
            <p>Approximate Count</p>
          </div>
          <div className={styles.geoLevelAction}>
            &nbsp;
          </div>
        </div>
        {
          Object.keys(this.props.geoLevels)
            .map(this.geoLevel.bind(this))
        }
      </div>
    )
  }
}
