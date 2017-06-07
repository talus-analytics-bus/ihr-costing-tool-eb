import React, { Component } from 'react';
import * as d3 from "d3";
import DataTables from 'material-ui-datatables';
import styles from '../Results2.scss';

import {CostChartLegend} from './CostChartLegend2.js';
import {CostChartOptions} from './CostChartOptions2.js';

import xMarkImage from '../../../images/x.png';
import { jeeTree } from '../../../data/jeeTree.js'; /* will want to import via api */

const formatMoney = d3.format('$,.0f');
const categories = [
	{ name: 'Consumable Materials', color: '#0868ac' },
	{ name: 'Durable Equipment', color: '#43a2ca' },
	{ name: 'Human Capabilities', color: '#7bccc4' },
	{ name: 'Physical Infrastructure', color: '#a8ddb5' },
	{ name: 'Technology', color: '#ccebc5' },
	{ name: 'Tools and Processes', color: '#f0f9e8' }
];

const columns = [
	{ key: 'core', label: 'Core Capacity', sortable: true },
	{ key: 'capacity', label: 'Capacity', sortable: true },
	{ key: 'indicator_id', label: 'Indicator', sortable: true },
	{ key: 'year_1_cost', label: '1-year Cost', sortable: true },
	{ key: 'year_2_cost', label: '2-year Cost', sortable: true },
	{ key: 'year_5_cost', label: '5-year Cost', sortable: true },
];

const resultsData = [];
jeeTree.forEach((core) => {
	core.fixedCost = 0;
	core.recurringCost = 0;

	core.capacities.forEach((capacity) => {
		capacity.fixedCost = 0;
		capacity.recurringCost = 0;

		capacity.indicators.forEach((indicator) => {
			// add to data
			indicator.fixedCost = 1e5 * Math.random();
			indicator.recurringCost = 1e4 * Math.random();
			resultsData.push({
				core: core.name,
				capacity: capacity.name,
				indicator: indicator.name,
				indicator_id: indicator.jee_id,
				year_1_cost: formatMoney(indicator.fixedCost),
				year_2_cost: formatMoney(indicator.fixedCost + indicator.recurringCost),
				year_5_cost: formatMoney(indicator.fixedCost + 4 * indicator.recurringCost),
			});

			capacity.fixedCost += indicator.fixedCost;
			capacity.recurringCost += indicator.recurringCost;
			core.fixedCost += indicator.fixedCost;
			core.recurringCost += indicator.recurringCost;
		});
	});
});

function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}

export class CostSummary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeData: jeeTree,
			activeCore: '',
			activeCapacity: '',
			activeIndicator: '',
			page: 1,
			showByCategory: true,
			showTable: false,
			costCategory: '1',
		};
	}

	getDataType = () => {
		if (!this.state.activeCore) return 'core';
		if (!this.state.activeCapacity) return 'capacity';
		else if (!this.state.activeIndicator) return 'indicator';
		return 'expense';
	}

	// version 2 of cost chart
	buildCostChart(selector, param={}) {
		var n = 6, // The number of series.
	    m = 3; // The number of values per series.

		const width = 920;
		const height = 380;

		// The xz array has m elements, representing the x-values shared by all series.
		// The yz array has n elements, representing the y-values of each of the n series.
		// Each yz[i] is an array of m non-negative numbers representing a y-value for xz[i].
		// The y01z array has the same structure as yz, but with stacked [y₀, y₁] instead of y.
		var xz = d3.range(m);
		    var yz = d3.range(n).map(function() { return bumps(m); });
		    var y01z = d3.stack().keys(d3.range(n))(d3.transpose(yz));
		    var yMax = d3.max(yz, function(y) { return d3.max(y); });
		    var y1Max = d3.max(y01z, function(y) { return d3.max(y, function(d) { return d[1]; }); });

		var chart = d3.select(selector),
		    margin = {top: 40, right: 10, bottom: 20, left: 10},
		    // width = +chart.attr("width") - margin.left - margin.right,
		    // height = +chart.attr("height") - margin.top - margin.bottom,
		    g = chart.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		chart
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom);

		var x = d3.scaleBand()
		    .domain(xz)
		    .rangeRound([0, width])
		    .padding(0.4);

		const xAxis = d3.axisBottom();

		const xAxisG = chart.append('g')
			.attr('class', 'x-axis axis')
			.attr('transform', `translate(0, ${height})`);

		var y = d3.scaleLinear()
		    .domain([0, y1Max])
		    .range([height, 0]);

		// const y = d3.scaleLinear()
		// 	.range([height, 0]);

		var color = d3.scaleOrdinal()
		    .domain(d3.range(n))
		    .range(d3.schemeCategory20c);

		var series = g.selectAll(".series")
		  .data(y01z)
		  .enter().append("g")
		    .attr("fill", function(d, i) { return color(i); });

		var rect = series.selectAll("rect")
		  .data(function(d) { return d; })
		  .enter().append("rect")
		    .attr("x", function(d, i) { return x(i); })
		    .attr("y", height)
		    .attr("width", x.bandwidth())
		    .attr("height", 0);

		rect.transition()
		    .delay(function(d, i) { return i * 10; })
		    .attr("y", function(d) { return y(d[1]); })
		    .attr("height", function(d) { return y(d[0]) - y(d[1]); });

		// g.append("g")
		//     .attr("class", "axis axis--x")
		//     .attr("transform", "translate(0," + height + ")")
		//     .call(d3.axisBottom(x)
		//         .tickSize(0)
		//         .tickPadding(6));

		d3.selectAll("input")
		    .on("change", changed);

		var timeout = d3.timeout(function() {
		  d3.select("input[value=\"grouped\"]")
		      .property("checked", true)
		      .dispatch("change");
		}, 2000);

		function changed() {
		  timeout.stop();
		  if (this.value === "grouped") transitionGrouped();
		  else transitionStacked();
		}

		function transitionGrouped() {
		  y.domain([0, yMax]);

		  rect.transition()
		      .duration(500)
		      .delay(function(d, i) { return i * 10; })
		      .attr("x", function(d, i) { return x(i) + x.bandwidth() / n * this.parentNode.__data__.key; })
		      .attr("width", x.bandwidth() / n)
		    .transition()
		      .attr("y", function(d) { return y(d[1] - d[0]); })
		      .attr("height", function(d) { return y(0) - y(d[1] - d[0]); });
		}

		function transitionStacked() {
		  y.domain([0, y1Max]);

		  rect.transition()
		      .duration(500)
		      .delay(function(d, i) { return i * 10; })
		      .attr("y", function(d) { return y(d[1]); })
		      .attr("height", function(d) { return y(d[0]) - y(d[1]); })
		    .transition()
		      .attr("x", function(d, i) { return x(i); })
		      .attr("width", x.bandwidth());
		}

		// add axes labels
		const xAxisLabel = chart.append('text')
			.attr('x', width / 2)
			.attr('y', height + 70)
			.style('text-anchor', 'middle')
			.style('font-size', '0.9em')
			.text('Core Capacity');
		this.yAxisLabel = chart.append('text')
			.attr('x', -height / 2)
			.attr('y', -70)
			.attr('transform', 'rotate(-90)')
			.style('text-anchor', 'middle')
			.style('font-size', '0.9em')
			.text('1-Year Cost');

		chart.update = () => {
			// get data
			let chartData;
			const dataType = this.getDataType();
			if (!this.state.activeCore) {
				xAxisLabel.text('Core Capacity');
				chartData = jeeTree;
			} else if (!this.state.activeCapacity) {
				xAxisLabel.text('Capacity');
				chartData = jeeTree.find(d => d.name === this.state.activeCore).capacities;
			} else if (!this.state.activeIndicator) {
				xAxisLabel.text('Indicator');
				chartData = jeeTree
					.find(d => d.name === this.state.activeCore).capacities
					.find(dd => dd.name === this.state.activeCapacity).indicators;
			} else {
				xAxisLabel.text('Expense');
				chartData = jeeTree
					.find(d => d.name === this.state.activeCore).capacities
					.find(dd => dd.name === this.state.activeCapacity).indicators
					.find(ddd => ddd.name === this.state.activeIndicator).expenses;
			}

			// // adjust axes
			// if (dataType === 'indicator') {
			// 	x.domain(chartData.map(d => d.jee_id));
			// } else {
			// 	x.domain(chartData.map(d => d.name));
			// }
		}


		// Returns an array of m psuedorandom, smoothly-varying non-negative numbers.
		// Inspired by Lee Byron’s test data generator.
		// http://leebyron.com/streamgraph/
		function bumps(m) {
		  var values = [], i, j, w, x, y, z;

		  // Initialize with uniform random values in [0.1, 0.2).
		  for (i = 0; i < m; ++i) {
		    values[i] = 0.1 + 0.1 * Math.random();
		  }

		  // Add five random bumps.
		  for (j = 0; j < 5; ++j) {
		    x = 1 / (0.1 + Math.random());
		    y = 2 * Math.random() - 0.5;
		    z = 10 / (0.1 + Math.random());
		    for (i = 0; i < m; i++) {
		      w = (i / m - y) * z;
		      values[i] += x * Math.exp(-w * w);
		    }
		  }

		  // Ensure all values are positive.
		  for (i = 0; i < m; ++i) {
		    values[i] = Math.max(0, values[i]);
		  }

		  return values;
		}

		chart.update();
	
	};

	// buildCostChart(selector, param={}) {
	// 	// start drawing chart
	// 	const margin = { top: 10, right: 40, bottom: 110, left: 95 };
	// 	const width = 800;
	// 	const height = 300;
	// 	const chart = d3.select(selector)
	// 		.attr('width', width + margin.left + margin.right)
	// 		.attr('height', height + margin.top + margin.bottom)
	// 		.append('g')
	// 			.attr('transform', `translate(${margin.left}, ${margin.top})`);

	// 	// define scales and add axes
	// 	const x = d3.scaleBand()
	// 		.range([0, width])
	// 		.round(true)
	// 		.padding(0.4);
	// 	const xAxis = d3.axisBottom();
	// 		// .orient('bottom');
	// 	const xAxisG = chart.append('g')
	// 		.attr('class', 'x-axis axis')
	// 		.attr('transform', `translate(0, ${height})`);

	// 	const y = d3.scaleLinear()
	// 		.range([height, 0]);
	// 	const yAxis = d3.axisLeft()
	// 		// .orient('left')
	// 		.tickSizeInner(-width)
	// 		.tickFormat(d3.format('$.2s'));
	// 	const yAxisG = chart.append('g')
	// 		.attr('class', 'y-axis axis');

	// 	// add axes labels
	// 	const xAxisLabel = chart.append('text')
	// 		.attr('x', width / 2)
	// 		.attr('y', height + 70)
	// 		.style('text-anchor', 'middle')
	// 		.style('font-size', '0.9em')
	// 		.text('Core Capacity');
	// 	this.yAxisLabel = chart.append('text')
	// 		.attr('x', -height / 2)
	// 		.attr('y', -70)
	// 		.attr('transform', 'rotate(-90)')
	// 		.style('text-anchor', 'middle')
	// 		.style('font-size', '0.9em')
	// 		.text('1-Year Cost');

	// 	chart.update = () => {
	// 		// get data
	// 		let chartData;
	// 		const dataType = this.getDataType();
	// 		if (!this.state.activeCore) {
	// 			xAxisLabel.text('Core Capacity');
	// 			chartData = jeeTree;
	// 		} else if (!this.state.activeCapacity) {
	// 			xAxisLabel.text('Capacity');
	// 			chartData = jeeTree.find(d => d.name === this.state.activeCore).capacities;
	// 		} else if (!this.state.activeIndicator) {
	// 			xAxisLabel.text('Indicator');
	// 			chartData = jeeTree
	// 				.find(d => d.name === this.state.activeCore).capacities
	// 				.find(dd => dd.name === this.state.activeCapacity).indicators;
	// 		} else {
	// 			xAxisLabel.text('Expense');
	// 			chartData = jeeTree
	// 				.find(d => d.name === this.state.activeCore).capacities
	// 				.find(dd => dd.name === this.state.activeCapacity).indicators
	// 				.find(ddd => ddd.name === this.state.activeIndicator).expenses;
	// 		}

	// 		// adjust axes
	// 		if (dataType === 'indicator') {
	// 			x.domain(chartData.map(d => d.jee_id));
	// 		} else {
	// 			x.domain(chartData.map(d => d.name));
	// 		}
	// 		xAxis.scale(x);
	// 		xAxisG.call(xAxis);

	// 		// add or remove bars based on new data
	// 		const barGroups = chart.selectAll('.bar-group')
	// 			.data(chartData);
	// 		const newBarGroups = barGroups.enter().append('g')
	// 			.attr('class', 'bar-group');
	// 		categories.forEach((category) => {
	// 			newBarGroups.selectAll('.bar')
	// 				.data(categories)
	// 				.enter().append('rect')
	// 					.attr('class', 'bar')
	// 					.attr('category', category)
	// 					.style('fill', d => d.color);
	// 		});
	// 		newBarGroups.append('text')
	// 			.attr('class', 'value-label')
	// 			.style('text-anchor', 'middle')
	// 			.style('font-size', '0.9em');

	// 		barGroups.exit().remove();
	// 		chart.updateBarHeight(1);
	// 	}

	// 	chart.updateBarHeight = (multiplier) => {
	// 		const barGroups = chart.selectAll('.bar-group');
	// 		// adjust y axis
	// 		const dataType = this.getDataType();
	// 		if (dataType === 'expense') {
	// 			y.domain([0, 1.2 * multiplier * d3.max(barGroups.data(), d => d.cost)]);
	// 		} else {
	// 			y.domain([0, 1.2 * multiplier * d3.max(barGroups.data(), d => d.fixedCost)]);
	// 		}
	// 		yAxis.scale(y);
	// 		yAxisG.call(yAxis);

	// 		// update bar values
	// 		var bandwidth = x.bandwidth();
	// 		barGroups.transition()
	// 			.attr('transform', (d) => {
	// 				if (dataType === 'indicator') return `translate(${x(d.jee_id)}, 0)`;
	// 				return `translate(${x(d.name)}, 0)`;
	// 			})
	// 			.each(function(d) {
	// 				let runningCost = (dataType === 'expense') ? d.cost : d.fixedCost;
	// 				runningCost *= (0.8 + 0.3 * Math.random()) * multiplier;
	// 				const originalCost = runningCost;
	// 				d3.select(this).selectAll('.bar').transition()
	// 					.each(function() {
	// 						d3.select(this).transition()
	// 							.attr('width', bandwidth)
	// 							.attr('y', y(runningCost))
	// 							.attr('height', height - y(runningCost));
	// 						runningCost -= (1.5 * originalCost / 6) * Math.random();
	// 					});
	// 				d3.select(this).select('.value-label')
	// 					.text(formatMoney(originalCost))
	// 					.transition()
	// 						.attr('x', bandwidth / 2)
	// 						.attr('y', y(originalCost) - 5);
	// 			});

	// 		chart.styleChart();
	// 	}

	// 	chart.styleChart = () => {
	// 		// chart styling
	// 		const bandwidth = x.bandwidth();
	// 		chart.selectAll('.tick text')
	// 			.style('font-size', '0.9em');
	// 		chart.selectAll('.tick line')
	// 			.style('fill', 'none')
	// 			.style('stroke', 'rgba(0,0,0,0.3)');
	// 		chart.selectAll('.axis path, .axis line')
	// 			.style('fill', 'none')
	// 			.style('stroke', '#333')
	// 			.style('shape-rendering', 'crispEdges');
	// 		chart.selectAll('.x-axis .tick text')
	// 			.call(wrap, bandwidth);
	// 		chart.selectAll('.y-axis .tick:nth-child(n+2) line')
	// 			.style('stroke', '#ccc')
	// 			.style('stroke-dasharray', '3,3');
	// 		chart.selectAll('.y-axis .tick text')
	// 			.attr('x', -10);
	// 	}

	// 	chart.update();

	// 	return chart;
	// }

	componentDidMount() {
		this.costChart = this.buildCostChart('.costChart');
		this.styleTable();
	}

	changeCore(event) {
		this.setState({activeCore: event.target.value}, this.costChart.update);
	}

	changeCapacity(event) {
		this.setState({activeCapacity: event.target.value}, this.costChart.update);
	}

	changeIndicator(event) {
		this.setState({activeIndicator: event.target.value}, this.costChart.update);
	}

	removeCapacity() {
		this.setState({activeCore: '', activeCapacity: '', activeIndicator: ''}, this.costChart.update);
	}

	removeIndicator() {
		this.setState({activeCapacity: '', activeIndicator: ''}, this.costChart.update);
	}

	toggleByCategory() {
		this.setState({showByCategory: !this.state.showByCategory});
	}

	changeCostCategory(event) {
		event.persist();
		this.setState({costCategory: event.target.value}, () => {
			this.yAxisLabel.text(`${event.target.value}-Year Cost`);
		});

		if (event.target.value === "1") this.costChart.updateBarHeight(1);
		else if (event.target.value === "2") this.costChart.updateBarHeight(1.5);
		else if (event.target.value === "5") this.costChart.updateBarHeight(2.5);
	}

	styleTable() {
		d3.selectAll('td').style('white-space', 'normal');
		d3.selectAll('th:nth-child(2), td:nth-child(2)').style('width', '200px');
		d3.selectAll('th:nth-child(n+4), td:nth-child(n+4)').style('text-align', 'right');
		d3.selectAll('tbody tr:nth-child(-n+3)')
			.style('background-color', '#f2f0f7');
		d3.selectAll('tbody tr:nth-child(n+4):nth-child(-n+13)')
			.style('background-color', '#dadaeb');
		d3.selectAll('tbody tr:nth-child(n+14)')
			.style('background-color', '#bcbddc');
	}

	toggleTable() {
		this.setState({showTable: !this.state.showTable}, this.styleTable);
	}

	render() {
		return (
			<div className={styles.costSummaryContainer}>
				<h2 className={styles.costSummaryTitle}>Cost Summary</h2>
				<div>
					<i>Explore the final costs.</i>
				</div>
				<div>
					<div className={styles.leftColumn}>
						<div className={styles.tableFilterContainer}>
							<div className={styles.tableFilterContainerTitle}>
								Select from the dropdowns below to view costs:
							</div>
							<div className={styles.filterBox}>
								<div className={styles.filterTitle}>Core Capacity:</div>
								<select className={styles.filterSelect} value={this.state.activeCore} onChange={(e) => this.changeCore(e)}>
									<option value="">All</option>
									<option value="Prevent">Prevent</option>
									<option value="Detect">Detect</option>
									<option value="Respond">Respond</option>
								</select>
							</div>
							{
								(this.state.activeCore) ?
								<div className={styles.filterBox}>
									<div className={styles.filterTitle}>Capacity:</div>
									<select className={styles.filterSelect} value={this.state.activeCapacity} onChange={(e) => this.changeCapacity(e)}>
										<option value="">All</option>
										{
											jeeTree.find(d => d.name === this.state.activeCore).capacities.map((capacity, i) =>
												<option key={i} value={capacity.name}>{capacity.name}</option>
											)
										}
									</select>
			            <img
			              alt=''
			              className={styles.filterBoxCloseIcon}
			              src={xMarkImage}
			              onClick={() => this.removeCapacity()}
			            />
								</div>
								: ''
							}
							{/*{
								(this.state.activeCapacity) ?
								<div className={styles.filterBox}>
									<div className={styles.filterTitle}>Indicator:</div>
									<select className={styles.filterSelect} value={this.state.activeIndicator} onChange={(e) => this.changeIndicator(e)}>
										<option value="">All</option>
										{
											jeeTree.find(d => d.name === this.state.activeCore).capacities.find(dd => dd.name === this.state.activeCapacity).indicators.map((indicator, j) =>
												<option key={j} value={indicator.name}>{indicator.jee_id}</option>
											)
										}
									</select>
			            <img
			              alt=''
			              className={styles.filterBoxCloseIcon}
			              src={xMarkImage}
			              onClick={() => this.removeIndicator()}
			            />
								</div>
								: ''
	}*/}
						</div>
					</div>
					<div className={styles.rightColumn}>
						<div className={styles.costChartContainer}>
							<svg className="costChart" width="960" height="500"></svg>
							<div className={styles.costChartUnderneath}>
								<CostChartOptions
									showByCategoryValue={this.state.showByCategory}
									toggleByCategory={() => this.toggleByCategory()}
									costCategory={this.state.costCategory}
									changeCostCategory={(e) => this.changeCostCategory(e)}
								/>
								<CostChartLegend categories={categories} />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.costTableToggle}>
					<div
						className={`${styles.button} ${this.state.showTable ? 'active' : ''}`}
						onClick={() => this.toggleTable()}
					>
						{this.state.showTable ? 'Hide Table' : 'Show Table'}
					</div>
					<div className={styles.button} onClick={() => this.exportTable()}>Export Table</div>
				</div>
				{
					this.state.showTable ?
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
					: ''
				}
			</div>
		);
	}
}
