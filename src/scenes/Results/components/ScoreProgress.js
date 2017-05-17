import React, { Component } from 'react';
import styles from '../Results.css';


const barHeight = 20;

export class ScoreProgress extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			oldScore: 124,
			newScore: 155,
			perfectScore: 210,
			width: 900,
		};
	}

	render() {
		return (
			<div className={styles.progressBar}>
				<svg width={this.state.width + 100} height="110">
					<defs>
						<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#b0c4de" />
							<stop offset="100%" stopColor="#4682b4" />
						</linearGradient>
						<linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#4682b4" />
							<stop offset="100%" stopColor="#082b84" />
						</linearGradient>
					</defs>
					<g transform="translate(1, 20)">
						<rect
							width={this.state.width}
							height={barHeight}
							fill="white"
							stroke="#111"
						/>
						<rect
							width={this.state.width * this.state.newScore / this.state.perfectScore}
							height={barHeight}
							fill="url(#grad2)"
						/>
						<rect
							width={this.state.width * this.state.oldScore / this.state.perfectScore}
							height={barHeight}
							fill="url(#grad1)"
						/>
						<text
							className={styles.valueLabel}
							x={this.state.width * this.state.oldScore / this.state.perfectScore - 8}
							y={barHeight / 2}
							dy="0.35em"
						>
							{this.state.oldScore}
						</text>
						<text
							className={styles.valueLabel}
							x={this.state.width * this.state.newScore / this.state.perfectScore - 8}
							y={barHeight / 2}
							dy="0.35em"
						>
							{this.state.newScore}
						</text>
						<line
							x1={this.state.width * this.state.oldScore / this.state.perfectScore - 20}
							x2={this.state.width * this.state.oldScore / this.state.perfectScore - 20}
							y1={barHeight + 5}
							y2={barHeight + 15}
						/>
						<line
							x1={this.state.width * this.state.newScore / this.state.perfectScore - 20}
							x2={this.state.width * this.state.newScore / this.state.perfectScore - 20}
							y1={barHeight + 5}
							y2={barHeight + 15}
						/>
						<text
							className={styles.barLabel}
							x={this.state.width * this.state.oldScore / this.state.perfectScore - 20}
							y={barHeight + 35}
						>
							Old Score
						</text>
						<text
							className={styles.barLabel}
							x={this.state.width * this.state.newScore / this.state.perfectScore - 20}
							y={barHeight + 35}
						>
							New Score
						</text>
					</g>
				</svg>
			</div>
		);
	}
}
