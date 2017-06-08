import React, { Component } from 'react';
import * as d3 from 'd3';
import styles from '../Results.scss';


export class CostChartLegend extends Component {
	buildLegend() {
		// add legend
		const legend = d3.select(this.refs.legend)
			.attr('width', 370)
			.attr('height', 80)
			.append('g')
				.attr('transform', 'translate(0, 10)');
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
			<div className={styles.costChartLegend}>
				<div className={styles.costChartLegendTitle}>Legend</div>
				<svg ref="legend"></svg>
			</div>
		);
	}
}
