import React, { Component } from 'react';
import d3 from 'd3';
import { jeeTree } from '../../../data/jeeTree.js'; /* will want to import via api */
import {ScoreProgress} from './ScoreProgress.js';
import styles from '../Results.scss';

const moneyFormat = d3.format('$,.0f');

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
				<h2 className={styles.scoreSummaryTitle}></h2>
				<ScoreProgress />
				<div className={styles.costContent}>
					<div className={styles.bigNumberContainer}>
						<div className={styles.bigNumber}>{'$2,380,832'}</div>
						<div className={styles.bigNumberText}>
							total costs<br/>
							for Kenya
						</div>
					</div>
					<div className={styles.subCostContainer}>
						<div className={styles.mediumNumberContainer}>
							<div className={styles.mediumNumber}>{'$504,304'}</div>
							<div className={styles.mediumNumberText}>
								costs for the "Prevent"<br/>
								core capacity
							</div>
						</div>
						<div className={styles.mediumNumberContainer}>
							<div className={styles.mediumNumber}>{'$1,354,570'}</div>
							<div className={styles.mediumNumberText}>
								costs for the "Detect"<br/>
								core capacity
							</div>
						</div>
						<div className={styles.mediumNumberContainer}>
							<div className={styles.mediumNumber}>{'$521,958'}</div>
							<div className={styles.mediumNumberText}>
								costs for the "Respond"<br/>
								core capacity
							</div>
						</div>
					</div>
				</div>
				<div className={styles.categoryContent}>
					<div className={styles.categoryTextContainer}>
						<div className={styles.categoryTextLabel}>
							Most Spending (<span className={styles.green}>{'$934,291'})</span>:
						</div>
						<div className={styles.categoryText}>
							Physical Infrastructure
						</div>
					</div>
					<div className={styles.categoryTextContainer}>
						<div className={styles.categoryTextLabel}>
							Least Spending (<span className={styles.green}>{'$144,309'})</span>:
						</div>
						<div className={styles.categoryText}>
							Consumable Materials
						</div>
					</div>
				</div>
				<div className={styles.changeContent}>
					<div className={styles.categoryTextContainer}>
						<div className={styles.categoryTextLabel}>
							Largest Score Improvement (<span className={styles.green}>{'+18'})</span>:
						</div>
						<div className={styles.categoryText}>
							Prevent
						</div>
					</div>
					<div className={styles.categoryTextContainer}>
						<div className={styles.categoryTextLabel}>
							Smallest Score Improvement (<span className={styles.green}>{'+6'})</span>:
						</div>
						<div className={styles.categoryText}>
							Detect
						</div>
					</div>
				</div>
				<div className={styles.notionalDataWarning}>Note: The data presented above are notional.</div>
			</div>
		);
	}
}
