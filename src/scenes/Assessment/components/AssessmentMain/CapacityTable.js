import React, { Component } from 'react';

import { RadioButton } from 'material-ui/RadioButton';
import styles from './AssessmentMain.css';

export class CapacityTable extends Component {
  capacityRows = () => {
    const rows = [
      {
        name: 'No Capacity - 1',
        color: 'red',
      },
      {
        name: 'Limited Capacity - 2',
        color: 'yellow',
      },
      {
        name: 'Developed Capacity - 3',
        color: 'yellw',
      },
      {
        name: 'Demonstrated Capacity - 4',
        color: 'green',
      },
      {
        name: 'Sustainable Capacity - 5',
        color: 'green',
      },
    ]

    return rows.map((row, index) => ({
      ...row,
      values: this.props.activeCapacity.indicators.map((indicator) => {
        return indicator.score_descriptions[index + 1] || ''
      })
    }))
  }

  render() {
    return (
      <div>
        <p>Choose the capacity the most closely aligns with Argentina's policy</p>
        <div>
          <div className={styles.capacityTable}>
            <div className={styles.capacityRow}>
              <div className={styles.capacityCell}></div>
              {
                this.props.activeCapacity.indicators.map((indicator) =>
                  <div className={styles.capacityCell}>
                    <p>{indicator.name}</p>
                  </div>
                )
              }
            </div>
            {
              this.capacityRows().map((capacityRow) =>
                <div className={styles.capacityRow}>
                  <div className={styles.capacityCell}><p>{capacityRow.name}</p></div>
                  {
                    capacityRow.values.map((c) =>
                      <div className={styles.capacityCellWithRadio}>
                        <RadioButton className={styles.capacityCellRadio}/>
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
