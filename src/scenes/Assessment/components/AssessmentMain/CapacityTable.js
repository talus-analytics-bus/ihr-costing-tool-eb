import React, { Component } from 'react';

import Checkbox from 'material-ui/Checkbox';
import styles from './AssessmentMain.css';
import { capacityLevels } from '../../Assessment';

export class CapacityTable extends Component {
  capacityRows = () => {
    const name = (index) => `${capacityLevels[index] === 'None' ? 'No' : capacityLevels[index]} Capacity - ${index + 1}`;

    const rows = [
      {
        color: 'red',
      },
      {
        color: 'yellow',
      },
      {
        color: 'yellow',
      },
      {
        color: 'green',
      },
      {
        color: 'green',
      },
    ].map((row, index) => ({
      ...row,
      name: name(index)
    }))

    return rows.map((row, index) => ({
      ...row,
      values: this.props.activeCapacity.indicators.map((indicator) => {
        return (indicator.score_descriptions || [])[index + 1] || ''
      }),
    }))
  }

  render() {
    return (
      <div className={styles.capacityTableContainer}>
        <p>Choose each capacity score below based on the {this.props.activeCountry.details.name || 'the country'}&#39;s current capacity, per the JEE assessment:</p>
        <div>
          <div className={styles.capacityTable}>
            <div className={styles.capacityRow}>
              <div className={styles.capacityCell}></div>
              {
                this.props.activeCapacity.indicators.map((indicator) =>
                  <div className={styles.capacityCell} key={indicator.jee_id}>
                    <p>{indicator.name}</p>
                  </div>
                )
              }
            </div>
            {
              this.capacityRows().map((capacityRow, index) =>
                <div className={styles.capacityRow} key={index}>
                  <div className={styles.capacityCell}><p>{capacityRow.name}</p></div>
                  {
                    capacityRow.values.map((c, cIndex) =>
                      <div
                        className={styles.capacityCellWithRadio}
                        key={cIndex}
                        onClick={(e) => this.props.setActiveCapacityLevel(this.props.activeCapacity.indicators[cIndex].jee_id, index)}
                      >
                        <Checkbox
                          className={styles.capacityCellRadio}
                          checked={this.props.activeCapacity.indicators[cIndex].selectedLevel === index}
                        />
                        <p>{c}</p>
                      </div>
                    )
                  }
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
