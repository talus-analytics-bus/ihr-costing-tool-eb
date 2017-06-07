import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import styles from '../Results2.scss';


export class CostChartOptions extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

	render() {
		return (
			<div className={styles.costChartOptions}>
				<div className={styles.costChartOptionsTitle}>Chart Options</div>
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
				<div className={styles.costChartOptionsSubtitle}>View chart as:</div>
        <RadioButtonGroup
          name="chartType"
          valueSelected={this.props.chartType}
          onChange={this.props.changeChartType}
        >
          <RadioButton
            className={styles.radioButton}
            value={"stacked"}
            label="Stacked bars"
          />
          <RadioButton
            className={styles.radioButton}
            value={"grouped"}
            label="Grouped bars"
          />
        </RadioButtonGroup>
			</div>
		);
	}
}
