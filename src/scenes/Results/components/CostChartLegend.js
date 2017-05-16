import React, { Component } from 'react';
import d3 from 'd3';
import Checkbox from 'material-ui/Checkbox';
import styles from '../Results.css';


export class CostChartLegend extends Component {
	buildLegend() {
		// add legend
		const legend = d3.select(this.refs.legend)
			.attr('width', 600)
			.attr('height', 100)
			.append('g')
				.attr('transform', 'translate(200, 10)');
		const legendGroups = legend.selectAll('g')
			.data(this.props.categories)
			.enter().append('g')
				.attr('transform', (d, i) => {
					if (i < 3) return `translate(0, ${25 * i})`;
					return `translate(200, ${25 * (i - 3)})`;
				});
		legendGroups.append('rect')
			.attr('width', 10)
			.attr('height', 10)
			.style('fill', d => d.color);
		legendGroups.append('text')
			.attr('x', 20)
			.attr('y', 10)
			.style('font-size', '0.9em')
			.text(d => d.name);
	}

	componentDidMount() {
		this.buildLegend();
	}

	render() {
		return (
			<div>
				{/*<div className={styles.chartOptionsContainer}>
          <Checkbox />
          <span>View by category?</span>
        </div>*/}
				<svg ref="legend"></svg>
			</div>
		);
	}
}