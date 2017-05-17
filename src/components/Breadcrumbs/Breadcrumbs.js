import React, { Component } from 'react';
import styles from './Breadcrumbs.css';


const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export class Breadcrumbs extends Component {
	constructor(props) {
		super(props);
	
		this.state = {};	
	}

	render() {
		return (
			<div className={styles.breadcrumbs}>
				<div className={styles.breadLink}>{this.props.activeCore}</div>
				<span> &raquo; </span>
				<div className={styles.breadLink}>{this.props.activeCapacity}</div>
				<span> &raquo; </span>
				<div className={capitalize(this.props.activeStage)}></div>
			</div>
		);
	}
}