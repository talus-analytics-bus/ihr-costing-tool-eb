import React, { Component } from 'react';
import d3 from 'd3';
import { jeeTree } from '../../../data/jeeTree.js'; /* will want to import via api */
import styles from '../Results.css';

const moneyFormat = d3.format('$,.0f');
const scoreDecFormat = d3.format('.1f');
console.log(jeeTree)

const getScoreColor = (score) => {
	if (score < 2) return '#c82127';
	else if (score < 4) return '#f7ec13';
	return '#156c37';
}


export class ScoreSummary extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			activeData: jeeTree,
			focusData: jeeTree,
			percOldScore: 99/190,
			percNewScore: 124/190,
		};
	}

	componentDidMount() {
		this.buildScoreChart('.score-summary-chart');
	}

	buildScoreChart(selector, param={}) {
		const capacities = [];
		const indicators = [];

		jeeTree.forEach((core) => {
			core.score = 0;
			core.oldScore = 0;
			core.capacities.forEach((capacity) => {
				capacity.score = 0;
				capacity.oldScore = 0;
				capacity.indicators.forEach((indicator) => {
					// make up a fake score
					indicator.score = 1 + Math.floor(5 * Math.random());
					indicator.oldScore = (indicator.score === 1) ? 1 : indicator.score - 1;
					indicator.capacityName = capacity.name;

					capacity.score += indicator.score;
					capacity.oldScore += indicator.oldScore;
					core.score += indicator.score;
					core.oldScore += indicator.score;

					indicators.push(indicator);
				});

				capacity.averageScore = capacity.score / capacity.indicators.length;
				capacity.oldAverageScore = capacity.oldScore / capacity.indicators.length;
				capacities.push(capacity);
			});

			core.averageScore = core.score / d3.sum(core.capacities, d => d.indicators.length);
			core.averageOldScore = core.oldScore / d3.sum(core.capacities, d => d.indicators.length);
		});

		// start drawing chart
		const margin = { top: 40, right: 20, bottom: 40, left: 1 };
		const width = 700;
		const height = 120;
		const chart = d3.select(selector)
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
				.attr('transform', `translate(${margin.left}, ${margin.top})`);

		// define chart variables
		const sectionHeight = 30;
		const indicatorWidth = 30;

		// draw each indicator first
		const indicatorSection = chart.append('g')
			.attr('transform', `translate(0, ${3 * sectionHeight})`);
		
		const indicatorGroups = indicatorSection.selectAll('.indicator')
			.data(indicators)
			.enter().append('g')
				.attr('class', 'indicator')
				.attr('transform', (d, i) => {
					return `translate(${i * indicatorWidth}, 0)`;
				});
		indicatorGroups.append('rect')
			.attr('width', indicatorWidth)
			.attr('height', sectionHeight)
			.style('stroke', '#111')
			.style('fill', d => getScoreColor(d.score));
		indicatorGroups.append('text')
			.attr('x', indicatorWidth / 2)
			.attr('y', sectionHeight / 2)
			.attr('dy', '0.35em')
			.style('font-size', '0.9em')
			.style('text-anchor', 'middle')
			.style('fill', (d) => {
				return (d.score >= 4 || d.score < 2) ? 'white' : 'black';
			})
			.text(d => d3.format('.0f')(d.score));
		indicatorGroups.append('rect')
			.attr('class', 'overlay-rect')
			.attr('width', d => indicatorWidth)
			.attr('height', sectionHeight)
			.style('fill', 'transparent')
			.on('mouseover', (d) => {
				const target = d3.select(d3.event.currentTarget);
				if (!target.classed('active')) target.style('fill', 'rgba(255,255,255,0.5)');
				//this.updateInfoPanelFocus(d);
			})
			.on('mouseout', (d) => {
				const target = d3.select(d3.event.currentTarget);
				if (!target.classed('active')) target.style('fill', 'transparent');
				//this.updateInfoPanelFocus();
			})
			.on('click', (d) => {
				d3.select(d3.event.currentTarget)
					.classed('active', true)
					.style('fill', 'rgba(255,255,255,0.5)');
				this.updateInfoPanelActive(d);
			});

		// draw the capacities now
		const capacitySection = chart.append('g')
			.attr('transform', `translate(0, ${2 * sectionHeight})`);
		let capX = 0;
		const capacityGroups = capacitySection.selectAll('.capacity')
			.data(capacities)
			.enter().append('g')
				.attr('class', 'capacity')
				.attr('transform', (d) => {
					const oldX = capX;
					d.width = indicatorWidth * d.indicators.length;
					capX += d.width
					return `translate(${oldX}, 0)`;
				});
		capacityGroups.append('rect')
			.attr('width', d => d.width)
			.attr('height', sectionHeight)
			.style('stroke', '#111')
			.style('fill', d => getScoreColor(d.averageScore));
		capacityGroups.append('text')
			.attr('x', d => d.width / 2)
			.attr('y', sectionHeight / 2)
			.attr('dy', '0.35em')
			.style('font-size', '0.9em')
			.style('text-anchor', 'middle')
			.style('fill', (d) => {
				return (d.averageScore >= 4 || d.averageScore < 2) ? 'white' : 'black';
			})
			.text(d => scoreDecFormat(d.averageScore));
		capacityGroups.append('rect')
			.attr('class', 'overlay-rect')
			.attr('width', d => d.width)
			.attr('height', sectionHeight)
			.style('fill', 'transparent')
			.on('mouseover', (d) => {
				const target = d3.select(d3.event.currentTarget);
				if (!target.classed('active')) target.style('fill', 'rgba(255,255,255,0.5)');
				//this.updateInfoPanelFocus(d);
			})
			.on('mouseout', (d) => {
				const target = d3.select(d3.event.currentTarget);
				if (!target.classed('active')) target.style('fill', 'transparent');
				//this.updateInfoPanelFocus();
			})
			.on('click', (d) => {
				d3.select(d3.event.currentTarget)
					.classed('active', true)
					.style('fill', 'rgba(255,255,255,0.5)');
				this.updateInfoPanelActive(d);
			});

		// draw the core section now
		const coreSection = chart.append('g')
			.attr('transform', `translate(0, ${sectionHeight})`);
		let coreX = 0;
		const coreGroups = coreSection.selectAll('.core')
			.data(jeeTree)
			.enter().append('g')
				.attr('class', 'core')
				.attr('transform', (d) => {
					const oldX = coreX;
					d.width = indicatorWidth * d3.sum(d.capacities, dd => dd.indicators.length);
					coreX += d.width;
					return `translate(${oldX}, 0)`;
				});
		coreGroups.append('rect')
			.attr('class', 'core')
			.attr('width', d => d.width)
			.attr('height', sectionHeight)
			.style('stroke', '#111')
			.style('fill', 'white');
		coreGroups.append('text')
			.attr('x', d => d.width / 2)
			.attr('y', sectionHeight / 2)
			.attr('dy', '0.35em')
			.style('font-size', '0.9em')
			.style('text-anchor', 'middle')
			.text(d => d.name);
		coreGroups.append('rect')
			.attr('width', d => d.width)
			.attr('height', sectionHeight)
			.style('fill', 'transparent')
			.on('mouseover', (d) => {
				const target = d3.select(d3.event.currentTarget);
				if (!target.classed('active')) target.style('fill', 'rgba(0,0,0,0.3)');
				//this.updateInfoPanelFocus(d);
			})
			.on('mouseout', (d) => {
				const target = d3.select(d3.event.currentTarget);
				if (!target.classed('active')) target.style('fill', 'transparent');
				//this.updateInfoPanelFocus();
			})
			.on('click', (d) => {
				d3.select(d3.event.currentTarget)
					.classed('active', true)
					.style('fill', 'rgba(0,0,0,0.3)');
				this.updateInfoPanelActive(d);
			});

		chart.append('rect')
			.attr('width', indicatorWidth * indicators.length)
			.attr('height', sectionHeight)
			.style('fill', 'white')
			.style('stroke', '#111')
		chart.append('text')
			.attr('x', indicatorWidth * indicators.length / 2)
			.attr('y', sectionHeight / 2)
			.attr('dy', '0.35em')
			.style('font-size', '0.9em')
			.style('text-anchor', 'middle')
			.text('All');
		chart.append('rect')
			.attr('width', indicatorWidth * indicators.length)
			.attr('height', sectionHeight)
			.style('fill', 'transparent')
			.on('mouseover', (d) => {
				const target = d3.select(d3.event.currentTarget);
				if (!target.classed('active')) target.style('fill', 'rgba(0,0,0,0.3)');
				//this.updateInfoPanelFocus(d);
			})
			.on('mouseout', (d) => {
				const target = d3.select(d3.event.currentTarget);
				if (!target.classed('active')) target.style('fill', 'transparent');
				//this.updateInfoPanelFocus();
			})
			.on('click', (d) => {
				d3.select(d3.event.currentTarget)
					.classed('active', true)
					.style('fill', 'rgba(0,0,0,0.3)');
				this.updateInfoPanelActive(d);
			});


		return chart;
	}

	updateInfoPanelActive(data) {
		//this.setState({ activeData: data || jeeTree });
		this.setState({ focusData: data || jeeTree });
	}

	updateInfoPanelFocus(data) {
		if (data) this.setState({ focusData: data });
		else this.setState({ focusData: this.state.activeData });
	}

	getInfoPanelTitle() {
		if (!this.state.focusData.name) return 'Overall';
		if (this.state.focusData.type === 'core_element') {
			return this.state.focusData.name;
		}

		let title = '';
		if (this.state.focusData.type === 'indicator') title = this.state.focusData.capacityName;
		else title = this.state.focusData.name;
		return `${title} (${this.state.focusData.jee_id || 'P.1'})`;
	}

	getInfoPanelName() {
		return this.state.focusData.name || 'Overall';
	}

	getInfoPanelCost() {
		if (this.state.focusData.type === 'indicator') return moneyFormat(1e5 * Math.random());
		else if (this.state.focusData.type === 'capacity') return moneyFormat(1e6 * Math.random());
		return moneyFormat(1e7 * Math.random());
	}

	render() {
		return (
			<div className={styles.scoreSummaryContainer}>
				<h2 className={styles.scoreSummaryTitle}>JEE Score Summary</h2>
				<div className={styles.scoreSummaryTextContainer}>
					<i>Click on a bar to view further detail.</i>
				</div>
				<div className={styles.scoreProgressBarContainer}>
					<svg className={styles.scoreProgressBar} width="400" height="20">
						<defs>
							<clipPath id="rectClip">
								<rect width={400 * this.state.percNewScore} height="20"></rect>
							</clipPath>
							<clipPath id="rectClip2">
								<rect width={400 * this.state.percOldScore} height="20"></rect>
							</clipPath>
						</defs>
						<rect width="400" height="20" rx="15" ry="15" fill="white" stroke="#999" strokeWidth="2" />
						<rect y="1" width="400" height="18" rx="15" ry="15" fill="steelblue" clipPath="url(#rectClip)" />
						<rect y="1" width="400" height="18" rx="15" ry="15" fill="lightsteelblue" clipPath="url(#rectClip2)" />
					</svg>
				</div>
				<div className={styles.scoreSummaryChartContainer}>
					<div className={styles.buttonGroup}>
						<div className={styles.button}>Show Before</div>
						<div className={styles.button}>Show After</div>
					</div>
					<svg className="score-summary-chart"></svg>
				</div>
				<div className={styles.infoPanel}>
					<div className={styles.infoPanelTitle}>{this.getInfoPanelTitle()}</div>
					<div className={styles.infoPanelContent}>
						{
							(this.state.focusData.type)
							? <div>
									{
										(this.state.focusData.type === 'indicator')
										? <div><b>Capacity:</b> {this.state.focusData.capacityName}</div>
										: ''
									}
									<div><b>Name:</b> {this.getInfoPanelName()}</div>
								</div>
							: <div>
									<b>Total Score:</b> <b>124</b> out of <b>190</b>
								</div>
						}
						<div>
							<b>Total Cost:</b> {this.getInfoPanelCost()}
						</div>
						{
							(this.state.focusData.type)
							? <div>
									<b>Score Improvement:</b> <b>{this.state.focusData.oldScore}</b> to <b>{this.state.focusData.score}</b>
								</div>
							: ''
						}
						{
							(this.state.focusData.type === 'capacity')
							? <div>
									<b>Average Score Improvement:</b> <b>{scoreDecFormat(this.state.focusData.oldAverageScore)}</b> to <b>{scoreDecFormat(this.state.focusData.averageScore)}</b>
								</div>
							: ''
						}
						{
							(this.state.focusData.type === 'indicator')
							? <div>
								<b>Expenses:</b>
								<ul>
									{
										this.state.focusData.expenses.map((expense) =>
											<li className={styles.infoPanelExpense}>
												{expense.name} <b>({moneyFormat(expense.cost)})</b>
											</li>
										)
									}
								</ul>
							</div>
							: ''
						}
						{
							(this.state.focusData.type === 'capacity')
							? <div>
									<b>Indicators:</b>
									<ul>
										{
											this.state.focusData.indicators.map((indicator) =>
												<li className={styles.infoPanelExpense}>
													{indicator.name} <b>({moneyFormat(1e5 * Math.random())})</b>
												</li>
											)
										}
									</ul>
								</div>
							: ''
						}
						{
							(this.state.focusData.type)
							? <div>
									<b>% of Total Expenses:</b> 29.2%
								</div>
							: ''
						}
					</div>
				</div>
			</div>
		);
	}
}
