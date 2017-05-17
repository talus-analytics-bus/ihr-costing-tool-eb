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
				<div className={styles.breadLink}>
					Prevent
				</div>
				<span> &raquo; </span>
				<div className={styles.breadLink}>
					P.1.1
				</div>
				<span> &raquo; </span>
				<div className={styles.breadLink}>
					Assessment
				</div>
			</div>
		);
	}
}