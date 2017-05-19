import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import styles from '../Results.scss';


export class CostChartOptions extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

	render() {
		return (
			<div className={styles.costChartOptions}>
				<div className={styles.costChartOptionsTitle}>Chart Options</div>
					{/*<Checkbox
					checked={this.props.showByCategoryValue}
					onCheck={this.props.toggleByCategory}
					label="View expenses by category"
					/>*/}
				<div className={styles.costChartOptionsSubtitle}>View expenses for:</div>
        <RadioButtonGroup
          name="costYear"
          valueSelected={this.props.costCategory}
          onChange={this.props.changeCostCategory}
        >
          <RadioButton
            className={styles.radioButton}
            value={"1"}
            label="1-year Cost"
          />
          <RadioButton
            className={styles.radioButton}
            value={"2"}
            label="2-year Cost"
          />
          <RadioButton
            className={styles.radioButton}
            value={"5"}
            label="5-year Cost"
          />
        </RadioButtonGroup>
			</div>
		);
	}
}
