import React, { Component } from 'react';

import Checkbox from 'material-ui/Checkbox';
import styles from './CapacityTable.scss';
import { capacityLevels } from '../../Assessment';
import {CapacityTableHeaderCell} from "./CapacityTableHeaderCell";

export class CapacityTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeColumn: 0,
    };
  }


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
        <h4>Choose a score for each indicator below based on {this.props.activeCountry.details.name || 'the country'}&#39;s current capacity, per the JEE assessment:</h4>
        <div>
          <div className={styles.capacityTable}>
            <div className={styles.capacityRow}>
              <CapacityTableHeaderCell/>
              {
                this.props.activeCapacity.indicators.map((indicator, index) =>
                  <CapacityTableHeaderCell
                    active={this.state.activeColumn === index}
                    activeText={indicator.name}
                    inactiveText={indicator.jee_id}
                  />
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
