import React, { Component } from 'react';
import d3 from 'd3';
import styles from '../Results.css';

const buildBarChart = (selector, param={}) => {
	const chartData = [
		{ name: 'Prevent', oldScore: 24, newScore: 34, perfectScore: 70 },
		{ name: 'Detect', oldScore: 45, newScore: 51, perfectScore: 60 },
		{ name: 'Respond', oldScore: 34, newScore: 36, perfectScore: 60 }
	];

	const margin = { top: 40, right: 40, bottom: 20, left: 100 };
	const width = 300;
	const height = 120;
	const chart = d3.select(selector)
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.append('g')
			.attr('transform', `translate(${margin.left}, ${margin.top})`);

	// define y scale and colors
	const y = d3.scale.ordinal()
		.domain(chartData.map(d => d.name))
		.rangeRoundBands([0, height], 0.25);
	const yAxis = d3.svg.axis()
		.orient('left')
		.scale(y)
		.innerTickSize(0);
	const bandwidth = y.rangeBand();
	const barColors = ['#10167f', '#7c81b8', 'lightsteelblue'];


	// define x scale and draw x-axis
	const x = d3.scale.linear()
		.domain([0, d3.max(chartData.map(d => d.perfectScore))])
		.range([0, width]);
	const xAxis = d3.svg.axis()
		.orient('top')
		.scale(x);
	chart.append('g')
		.attr('class', 'x-axis axis')
		.call(xAxis);

	// draw bars
	const barGroups = chart.selectAll('.bar-group')
		.data(chartData)
		.enter().append('g')
			.attr('transform', d => `translate(0, ${y(d.name)})`);
	barGroups.append('rect')
		.attr('class', 'bar new-score-bar')
		.attr('width', d => x(d.newScore))
		.attr('height', bandwidth)
		.style('fill', barColors[0]);
	barGroups.append('rect')
		.attr('class', 'bar old-score-bar')
		.attr('width', d => x(d.oldScore))
		.attr('height', bandwidth)
		.style('fill', barColors[1]);
	barGroups.append('line')
		.attr('class', 'perfect-score-line')
		.attr('x1', d => x(d.perfectScore))
		.attr('x2', d => x(d.perfectScore))
		.attr('y2', bandwidth);

	// add y-axis after adding bars
	chart.append('g')
		.attr('class', 'y-axis axis')
		.call(yAxis);


	// styling
	d3.selectAll(`${selector} .y-axis .tick text`)
		.attr('x', -10);
	d3.selectAll(`${selector} .tick text`)
		.style('font-size', '0.9em');
	d3.selectAll(`${selector} .tick line`)
		.style('fill', 'none')
		.style('stroke', 'rgba(0,0,0,0.3)')
		.style('stroke-dasharray', '3,3');
	d3.selectAll(`${selector} .axis path, ${selector} .axis line`)
		.style('fill', 'none')
		.style('stroke', '#333')
		.style('shape-rendering', 'crispEdges');

	return chart;
}

export class ScoreSummary extends Component {
	constructor(props) {
		super(props);
		
		this.state = {

		};
	}

	componentDidMount() {
		buildBarChart('.score-summary-chart');
	}

	render() {
		return (
			<div className={styles.scoreSummaryContainer}>
				<h2 className={styles.scoreSummaryTitle}>JEE Score Summary</h2>
				<div className={styles.scoreSummaryTextContainer}>
					Score Summary:
				</div>
				<div className={styles.scoreSummaryChartContainer}>
					<svg className="score-summary-chart"></svg>
				</div>
			</div>
		);
	}
}
