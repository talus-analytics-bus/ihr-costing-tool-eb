import React, { Component } from 'react';
import styles from '../Results.scss';


const barHeight = 40;

export class ScoreProgress extends Component {
	constructor(props) {
		super(props);

		this.state = {
			oldScore: 124,
			newScore: 155,
			perfectScore: 210,
			width: 1000,
		};
	}

	render() {
		return (
			<div className={styles.progressBar}>
				<div className={styles.progressBarTitle}>
					Progress towards Demonstrated/Sustainable Capacity:
				</div>
				<svg width={this.state.width + 100} height="110">
					<defs>
						<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#c82127" />
							<stop offset="50%" stopColor="#f7ec13" />
							<stop offset="100%" stopColor="#156c37" />
						</linearGradient>
					</defs>
					<g transform="translate(1, 20)">
						<rect
							width={this.state.width}
							height={barHeight}
							fill="url(#grad1)"
							stroke="#111"
						/>
						<circle
							className={styles.valueLabel}
							r="10"
							cx={this.state.width * this.state.oldScore / this.state.perfectScore}
							cy={barHeight / 2}
						/>
						<circle
							className={styles.valueLabel}
							r="10"
							cx={this.state.width * this.state.newScore / this.state.perfectScore}
							cy={barHeight / 2}
						/>
						<line
							x1={this.state.width * this.state.oldScore / this.state.perfectScore}
							x2={this.state.width * this.state.oldScore / this.state.perfectScore}
							y1={barHeight - 5}
							y2={barHeight + 15}
						/>
						<line
							x1={this.state.width * this.state.newScore / this.state.perfectScore}
							x2={this.state.width * this.state.newScore / this.state.perfectScore}
							y1={barHeight - 5}
							y2={barHeight + 15}
						/>
						<text
							className={styles.barLabel}
							x={this.state.width * this.state.oldScore / this.state.perfectScore}
							y={barHeight + 35}
						>
							Current Level
						</text>
						<text
							className={styles.barLabel}
							x={this.state.width * this.state.newScore / this.state.perfectScore}
							y={barHeight + 35}
						>
							Target Level
						</text>
					</g>
				</svg>
			</div>
		);
	}
}
