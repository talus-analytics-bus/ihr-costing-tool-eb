import React, { Component } from 'react';
import * as d3 from "d3";
import { jeeTree } from '../../../data/jeeTree.js'; /* will want to import via api */
// import {ScoreProgress} from './ScoreProgress.js';
import styles from '../Results2.scss';

const moneyFormat = d3.format('$,.0f');

const getScoreColor = (score) => {
	if (score < 2) return '#c82127';
	else if (score < 4) return '#f7ec13';
	return '#156c37';
}


export class SummaryMetrics extends Component {
	render() {
		return (
			<div className={styles.scoreSummaryContainer}>
				<div className={styles.costContent}>
					<div className={styles.bigNumberContainer}>
						<div className={styles.bigNumber}>{'$8,380,832'}</div>
						<div className={styles.bigNumberText}>
							total costs<br/>
							for Kenya
						</div>
					</div>
					<div className={styles.subCostContainer}>
						<div className={styles.mediumNumberContainer}>
							<div className={styles.mediumNumber}>{'$1,775,214'}</div>
							<div className={styles.mediumNumberText}>
								costs for the "Prevent"<br/>
								core capacity
							</div>
						</div>
						<div className={styles.mediumNumberContainer}>
							<div className={styles.mediumNumber}>{'$4,768,259'}</div>
							<div className={styles.mediumNumberText}>
								costs for the "Detect"<br/>
								core capacity
							</div>
						</div>
						<div className={styles.mediumNumberContainer}>
							<div className={styles.mediumNumber}>{'$1,837,359'}</div>
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
							Most Spending (<span>{'$3,288,823'})</span>:
						</div>
						<div className={styles.categoryText}>
							Physical Infrastructure
						</div>
					</div>
					<div className={styles.categoryTextContainer}>
						<div className={styles.categoryTextLabel}>
							Least Spending (<span>{'$507,634'})</span>:
						</div>
						<div className={styles.categoryText}>
							Consumable Materials
						</div>
					</div>
				</div>
			</div>
		);
	}
}
