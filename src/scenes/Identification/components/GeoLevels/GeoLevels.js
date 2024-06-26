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

  handleChange = (event, key, type = 'value') => {
    this.setState({
      [key]: event.target.value,
    });
    this.props.setGeoLevel(key, event.target.value, type);
  }

  handleKeyPress = (event, target) => {
    if (event.key === 'Enter') {
      this.props.toggleEdit(target);
    }
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
              <TextField
                defaultValue={this.props.geoLevels[key].name}
                hintText={!Boolean(this.props.geoLevels[key].name) ? 'undefined' : null}
                onChange={(e) => this.handleChange(e, key, 'name')}
                onKeyPress={(e) => this.handleKeyPress(e, key)}
                errorText={this.props.geoLevels[key].error}
              />
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
            <TextField
              type="number"
              defaultValue={this.props.geoLevels[key].value}
              hintText={!Boolean(this.props.geoLevels[key].value) ? 'undefined' : null}
              onChange={(e) => this.handleChange(e, key)}
              onKeyPress={(e) => this.handleKeyPress(e, key)}
              errorText={this.props.geoLevels[key].error}
            />
          )
        }
        </div>
        <div className={styles.geoLevelAction}>
          <RaisedButton
            className={styles.geoLevelActionButton}
            label={this.props.geoLevels[key].editing ? 'Save' : 'Modify'}
            onClick={() => this.props.toggleEdit(key, this.props.geoLevels[key].editing, this.state[key])}
          />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.geoLevels}>
        <div className={styles.geoLevelsTitle}>Administrative Organization</div>
        {
          Object.keys(this.props.geoLevels)
            .map(this.geoLevel.bind(this))
        }
      </div>
    )
  }
}
