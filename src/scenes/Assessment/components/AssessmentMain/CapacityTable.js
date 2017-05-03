import React, { Component } from 'react';

import Checkbox from 'material-ui/Checkbox';
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
      }),
    }))
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>Choose the capacity the most closely aligns with {this.props.activeCountry.details.name || 'the country'}'s policy</p>
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
                      <div className={styles.capacityCellWithRadio} key={cIndex}>
                        <Checkbox
                          className={styles.capacityCellRadio}
                          checked={this.props.activeCapacity.indicators[cIndex].selectedLevel === index}
                          onCheck={(e) => this.props.setActiveCapacityLevel(this.props.activeCapacity.indicators[cIndex].jee_id, index)}
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
