import React, { Component } from 'react';
import styles from './AssessmentBreadcrumbs.css';


const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export class AssessmentBreadcrumbs extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	
		this.state = {};	
	}

	render() {
		return (
			<div className={styles.assessmentBreadcrumbs}>
				<div className={styles.breadLink}>
					{this.props.activeCore.name}
				</div>
				<span> &raquo; </span>
				<div className={styles.breadLink}>
					{this.props.activeCapacity.indicators[0].jee_id.slice(0, 3)}
				</div>
				<span> &raquo; </span>
				<div className={styles.breadLink}>
					{capitalize(this.props.activeStage)}
				</div>
			</div>
		);
	}
}