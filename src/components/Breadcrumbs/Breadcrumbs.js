import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.scss';


export class Breadcrumbs extends Component {
	constructor(props) {
		super(props);
	
		this.state = {};	
	}

	render() {
		return (
			<div className={styles.breadcrumbs}>
				<div className={`${styles.menuItem} ${this.props.page === 'home' ? styles.active : ''}`}>
					<Link to="/">Home</Link>
				</div>
				<div className={`${styles.menuItem} ${this.props.page === 'identification' ? styles.active : ''}`}>
					<Link to="/identification">Identification</Link>
				</div>
				<div className={`${styles.menuItem} ${this.props.page === 'upload' ? styles.active : ''}`}>
					<Link to="/upload">Upload Assessment</Link>
				</div>
				<div className={`${styles.menuItem} ${this.props.page === 'start' ? styles.active : ''}`}>
					<Link to="/start">Start</Link>
				</div>
				<div className={`${styles.menuItem} ${this.props.page === 'assessment' ? styles.active : ''}`}>
					<Link to="/assessment">Assessment/Costing</Link>
				</div>
				<div className={`${styles.menuItem} ${this.props.page === 'results' ? styles.active : ''}`}>
					<Link to="/results">Results</Link>
				</div>
			</div>
		);
	}
}