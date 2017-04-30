import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import styles from './GeoLevels.css';

export class GeoLevels extends Component {
  geoLevel = (key) => {
    return (

      <div className={styles.geoLevel}>
        <div className={styles.geoLevelRow}>
          <p>{key}</p>
        </div>
        <div className={styles.geoLevelName}>
          <p>{ this.props.geoLevels[key].name }</p>
        </div>
        <div className={styles.geoLevelCount}>
          <p className={styles.geoLevelCountNumber}>{ this.props.geoLevels[key].count && this.props.geoLevels[key].count.toLocaleString() }</p>
        </div>
        <div className={styles.geoLevelAction}>
          <RaisedButton className={styles.geoLevelActionButton} label="Modify"/>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.geoLevels}>
        <div className={styles.geoLevel}>
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
