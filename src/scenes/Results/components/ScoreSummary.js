import React, { Component } from 'react';
import d3 from 'd3';
import { jeeTree } from '../../../data/jeeTree.js'; /* will want to import via api */
import styles from '../Results.css';

const moneyFormat = d3.format('$,.0f');

const buildBarChart = (selector, param={}) => {
	// make fake data
	const chartData = [
		{
			name: 'Prevent',
			oldScore: 24,
			newScore: 54,
			perfectScore: 70,
			fixedCost: 3e6 * Math.random(),
			recurringCost: 1e6 * Math.random(),
		},
		{
			name: 'Detect',
			oldScore: 45,
			newScore: 51,
			perfectScore: 60,
			fixedCost: 3e6 * Math.random(),
			recurringCost: 1e6 * Math.random(),
		},
		{
			name: 'Respond',
			oldScore: 34,
			newScore: 42,
			perfectScore: 60,
			fixedCost: 3e6 * Math.random(),
			recurringCost: 1e6 * Math.random(),
		}
	];
	chartData.forEach((core, i) => {
		core.costYear1 = core.fixedCost;
		core.costYear2 = core.fixedCost + core.recurringCost;
		core.costYear5 = core.fixedCost + 4 * core.recurringCost;

		// add capacities
		core.capacities = jeeTree[i].capacities.map((c) => {
			const oldScore = 1 + Math.floor(4 * Math.random());
			return {
				name: c.name,
				oldScore,
				newScore: oldScore + 1,
				perfectScore: 5,
				fixedCost: core.fixedCost / jeeTree[i].capacities.length,
				recurringCost: core.recurringCost / jeeTree[i].capacities.length,
			};
		});
	});

	// start drawing chart
	const margin = { top: 80, right: 400, bottom: 80, left: 100 };
	const width = 540;
	const height = 120;
	const chart = d3.select(selector)
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.append('g')
			.attr('transform', `translate(${margin.left}, ${margin.top})`);

	// define y scale and colors
	const y = d3.scale.ordinal()
		.domain(chartData.map(d => d.name))
		.rangeRoundBands([0, height], 0.4);
	const yAxis = d3.svg.axis()
		.orient('left')
		.scale(y)
		.innerTickSize(0);
	const bandwidth = y.rangeBand();
	const barColors = ['#10167f', '#7c81b8'];


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

	// add y-axis after adding bars
	chart.append('g')
		.attr('class', 'y-axis axis')
		.call(yAxis);

	// draw chart title
	chart.append('text')
		.attr('x', width / 2)
		.attr('y', -40)
		.style('text-anchor', 'middle')
		.style('font-weight', 600)
		.text('Core Capacities');

	// add costs
	const costX = width + 60;
	const yearX1 = 100;
	const yearX2 = 220;
	const yearX3 = 340;
	const totalY = height + 30;
	chart.append('text')
		.attr('x', costX + yearX1)
		.attr('y', -8)
		.style('text-anchor', 'end')
		.style('font-weight', 600)
		.style('font-size', '0.9em')
		.text('1-year Cost');
	chart.append('text')
		.attr('x', costX + yearX2)
		.attr('y', -8)
		.style('text-anchor', 'end')
		.style('font-weight', 600)
		.style('font-size', '0.9em')
		.text('2-year Cost');
	chart.append('text')
		.attr('x', costX + yearX3)
		.attr('y', -8)
		.style('text-anchor', 'end')
		.style('font-weight', 600)
		.style('font-size', '0.9em')
		.text('5-year Cost');

	chart.append('line')
		.attr('x1', costX)
		.attr('x2', costX + yearX3 + 30)
		.attr('y1', height + 5)
		.attr('y2', height + 5)
		.style('stroke', '#333')
		.style('stroke-width', 1);
	chart.append('text')
		.attr('class', 'total-cost-1')
		.attr('x', costX + yearX1)
		.attr('y', totalY)
		.style('font-size', '0.9em')
		.style('text-anchor', 'end');
	chart.append('text')
		.attr('class', 'total-cost-2')
		.attr('x', costX + yearX2)
		.attr('y', totalY)
		.style('font-size', '0.9em')
		.style('text-anchor', 'end');
	chart.append('text')
		.attr('class', 'total-cost-5')
		.attr('x', costX + yearX3)
		.attr('y', totalY)
		.style('font-size', '0.9em')
		.style('text-anchor', 'end');


	// add legend
	const legend = chart.append('g')
		.attr('transform', `translate(70, ${height + 40})`);
	legend.append('rect')
		.attr('x', -15)
		.attr('y', -12)
		.attr('width', 370)
		.attr('height', 34)
		.style('fill', 'white')
		.style('stroke', 'black');
	const legendGroups = legend.selectAll('g')
		.data(barColors)
		.enter().append('g')
			.attr('transform', (d, i) => `translate(${120 * i}, 0)`);
	legendGroups.append('rect')
		.attr('width', 10)
		.attr('height', 10)
		.style('fill', d => d);
	legendGroups.append('text')
		.attr('x', 20)
		.attr('y', 10)
		.style('font-size', '0.9em')
		.text((d, i) => (i === 0) ? 'Old Score' : 'New Score');
	legend.append('line')
		.attr('x1', 240)
		.attr('x2', 240)
		.attr('y1', -2)
		.attr('y2', 12)
		.style('stroke', '#333')
		.style('stroke-width', 2);
	legend.append('text')
		.attr('x', 255)
		.attr('y', 10)
		.style('font-size', '0.9em')
		.text('Perfect Score');

	chart.update = (data) => {
		y.domain(data.map(d => d.name));

		// draw bars
		const barGroups = chart.selectAll('.bar-group')
			.data(data);

		barGroups.exit().remove();

		const newBarGroups = barGroups.enter().append('g')
			.attr('transform', d => `translate(0, ${y(d.name)})`);
		newBarGroups.append('rect')
			.attr('class', 'bar new-score-bar');
		newBarGroups.append('rect')
			.attr('class', 'bar old-score-bar');

		barGroups.select('.new-score-bar')
			.attr('width', d => x(d.newScore))
			.attr('height', bandwidth)
			.style('fill', barColors[1]);
		barGroups.select('.old-score-bar')
			.attr('width', d => x(d.oldScore))
			.attr('height', bandwidth)
			.style('fill', barColors[0]);
		barGroups.selectAll('rect')
			.on('mouseover', (d) => {
				const parent = d3.select(d3.event.currentTarget.parentNode);
				parent.select('.old-score-bar').transition()
					.attr('x', -5)
					.attr('width', x(d.oldScore) + 5)
					.attr('y', -5)
					.attr('height', bandwidth + 10);
				parent.select('.new-score-bar').transition()
					.attr('width', x(d.newScore) + 5)
					.attr('y', -5)
					.attr('height', bandwidth + 10);
			})
			.on('mouseout', (d) => {
				const parent = d3.select(d3.event.currentTarget.parentNode);
				parent.select('.old-score-bar').transition()
					.attr('x', 0)
					.attr('width', x(d.oldScore))
					.attr('y', 0)
					.attr('height', bandwidth);
				parent.select('.new-score-bar').transition()
					.attr('width', x(d.newScore))
					.attr('y', 0)
					.attr('height', bandwidth);
			})
			.on('click', (d) => {
				chart.update(d.capacities);
			});

		newBarGroups.append('line')
			.attr('class', 'perfect-score-line');
		barGroups.select('.perfect-score-line')
			.attr('x1', d => x(d.perfectScore))
			.attr('x2', d => x(d.perfectScore))
			.attr('y2', bandwidth)
			.style('stroke', '#333')
			.style('stroke-width', 2);

		const newCostGroups = newBarGroups.append('g')
			.attr('transform', `translate(${costX}, 10)`);
		newCostGroups.append('text')
			.attr('class', 'cost-1');
		newCostGroups.append('text')
			.attr('class', 'cost-2');
		newCostGroups.append('text')
			.attr('class', 'cost-5');

		barGroups.select('.cost-1')
			.attr('x', yearX1)
			.attr('dy', '.35em')
			.style('font-size', '0.9em')
			.style('text-anchor', 'end')
			.text(d => moneyFormat(d.costYear1));
		barGroups.select('.cost-2')
			.attr('x', yearX2)
			.attr('dy', '.35em')
			.style('font-size', '0.9em')
			.style('text-anchor', 'end')
			.text(d => moneyFormat(d.costYear2));
		barGroups.select('.cost-5')
			.attr('x', yearX3)
			.attr('dy', '.35em')
			.style('font-size', '0.9em')
			.style('text-anchor', 'end')
			.text(d => moneyFormat(d.costYear5));

		chart.select('.total-cost-1').text(moneyFormat(d3.sum(data, d => d.costYear1)));
		chart.select('.total-cost-2').text(moneyFormat(d3.sum(data, d => d.costYear2)));
		chart.select('.total-cost-5').text(moneyFormat(d3.sum(data, d => d.costYear5)));

		// chart styling
		d3.selectAll(`${selector} .y-axis .tick text`)
			.style('font-size', '1.1em')
			.attr('x', -12);
		d3.selectAll(`${selector} .tick text`)
			.style('font-size', '0.9em');
		d3.selectAll(`${selector} .tick line`)
			.style('fill', 'none')
			.style('stroke', 'rgba(0,0,0,0.3)');
		d3.selectAll(`${selector} .axis path, ${selector} .axis line`)
			.style('fill', 'none')
			.style('stroke', '#333')
			.style('shape-rendering', 'crispEdges');
	}

	chart.update(chartData);

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
					<i>Click on a bar to view further detail.</i>
				</div>
				<div className={styles.scoreSummaryChartContainer}>
					<svg className="score-summary-chart"></svg>
				</div>
			</div>
		);
	}
}
