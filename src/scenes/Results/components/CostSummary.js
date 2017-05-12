import React, { Component } from 'react';
import d3 from 'd3';
import DataTables from 'material-ui-datatables';
import styles from '../Results.css';

import { jeeTree } from '../../../data/jeeTree.js'; /* will want to import via api */

const formatMoney = d3.format('$,.0f');
const categories = [
	{ name: 'Consumable Materials', color: '#006837' },
	{ name: 'Durable Equipment', color: '#31a354' },
	{ name: 'Human Capabilities', color: '#78c679' },
	{ name: 'Physical Infrastructure', color: '#addd8e' },
	{ name: 'Technology', color: '#d9f0a3' },
	{ name: 'Tools and Processes', color: '#ffffcc' }
];

const columns = [
	{ key: 'core', label: 'Core Capacity' },
	{ key: 'capacity', label: 'Capacity' },
	//{ key: 'indicator', label: 'Indicator' },
	{ key: 'year_1_cost', label: '1-year Cost' },
	{ key: 'year_2_cost', label: '2-year Cost' },
	{ key: 'year_5_cost', label: '5-year Cost' },
];

const resultsData = [];
jeeTree.forEach((core) => {
	core.capacities.forEach((capacity) => {
		capacity.indicators.forEach((indicator) => {
			// add to data
			const fixedCost = 1e5 * Math.random();
			const recurringCost = 1e4 * Math.random();
			resultsData.push({
				core: core.name,
				capacity: capacity.name,
				indicator: indicator.name,
				year_1_cost: formatMoney(fixedCost),
				year_2_cost: formatMoney(fixedCost + recurringCost),
				year_5_cost: formatMoney(fixedCost + 4 * recurringCost),
			});
		});
	});
});

const buildCostChart = (selector, param={}) => {
	// make fake data
	const chartData = [
		{
			name: 'Prevent',
			fixedCost: 3e6 * Math.random(),
			recurringCost: 1e6 * Math.random(),
		},
		{
			name: 'Detect',
			fixedCost: 3e6 * Math.random(),
			recurringCost: 1e6 * Math.random(),
		},
		{
			name: 'Respond',
			fixedCost: 3e6 * Math.random(),
			recurringCost: 1e6 * Math.random(),
		}
	];

	// start drawing chart
	const margin = { top: 40, right: 40, bottom: 180, left: 80 };
	const width = 400;
	const height = 400;
	const chart = d3.select(selector)
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.append('g')
			.attr('transform', `translate(${margin.left}, ${margin.top})`);

	// define scales
	const x = d3.scale.ordinal()
		.domain(chartData.map(d => d.name))
		.rangeRoundBands([0, width], 0.4);
	const xAxis = d3.svg.axis()
		.orient('bottom')
		.scale(x);
	chart.append('g')
		.attr('class', 'x-axis axis')
		.attr('transform', `translate(0, ${height})`)
		.call(xAxis);
	const bandwidth = x.rangeBand();

	const y = d3.scale.linear()
		.domain([0, 2.4e6])
		.range([height, 0]);
	const yAxis = d3.svg.axis()
		.orient('left')
		.tickFormat(d3.format('$.2s'))
		.scale(y);
	chart.append('g')
		.attr('class', 'y-axis axis')
		.call(yAxis);

	// add bars
	let runningCost = 1.8e6 + 0.4e6 * Math.random();
	const barGroups = chart.selectAll('.bar-group')
		.data(chartData)
		.enter().append('g')
			.attr('transform', d => `translate(${x(d.name)}, 0)`);
	barGroups.each(function() {
		runningCost = 2e6 + 0.4e6 * Math.random();
		d3.select(this).selectAll('.bar')
			.data(categories)
			.enter().append('rect')
				.attr('class', 'bar')
				.attr('width', bandwidth)
				.style('fill', d => d.color)
				.each(function() {
					d3.select(this)
						.attr('y', y(runningCost))
						.attr('height', height - y(runningCost) - 1);
					runningCost -= 0.7e6 * Math.random();
				});
	});

	// add legend
	const legend = chart.append('g')
		.attr('transform', `translate(0, ${height + 60})`);
	const legendGroups = legend.selectAll('g')
		.data(categories)
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

	// chart styling
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

export class CostSummary extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			data: resultsData,
			page: 1,
		};
	}

	componentDidMount() {
		d3.selectAll('td').style('white-space', 'normal');
		d3.selectAll('th:nth-child(2), td:nth-child(2)').style('width', '200px');
		d3.selectAll('th:nth-child(n+3), td:nth-child(n+3)').style('text-align', 'right');
		d3.selectAll('tbody tr:nth-child(-n+3)')
			.style('background-color', '#f2f0f7');
		d3.selectAll('tbody tr:nth-child(n+3):nth-child(-n+13)')
			.style('background-color', '#dadaeb');
		d3.selectAll('tbody tr:nth-child(n+13)')
			.style('background-color', '#bcbddc');

		buildCostChart('.costChart');
	}

	render() {
		return (
			<div className={styles.costSummaryContainer}>
				<h2 className={styles.costSummaryTitle}>Cost Summary</h2>
				<div>	
					<i>Explore the final costs for the country chosen.</i>
				</div>
				<div className={styles.leftColumn}>
					<div className={styles.tableFilterContainer}>
						<div className={styles.filterTitle}>Category:</div>
						<select className={styles.categoryFilter}>
							<option value="All">All</option>
							<option value="Consumable">Consumable Materials</option>
							<option value="Durable">Durable Equipment</option>
							<option value="Human">Human Capabilities</option>
							<option value="Physical">Physical Infrastructure</option>
							<option value="Technology">Technology</option>
							<option value="Tools">Tools and Processes</option>
						</select>
					</div>
					<div className={styles.costTableContainer}>
						<DataTables
							height={'auto'}
							selectable={false}
							columns={columns}
							data={resultsData}
							page={1}
							count={resultsData.length}
						/>
					</div>
				</div>
				<div className={styles.rightColumn}>
					<svg className="costChart"></svg>
				</div>
			</div>
		);
	}
}