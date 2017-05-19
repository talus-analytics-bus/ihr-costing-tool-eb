import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.scss';


export class Breadcrumbs extends Component {
	render() {
		return (
			<div className={styles.breadcrumbs}>
				<div className={`${styles.menuItem} ${this.context.router.route.location.pathname === '/' ? styles.active : ''}`}>
					<Link to="/">Home</Link>
				</div>
				<div className={`${styles.menuItem} ${this.context.router.route.location.pathname === '/identification/' ? styles.active : ''}`}>
					<Link to="/identification/">Identification</Link>
				</div>
				<div className={`${styles.menuItem} ${this.context.router.route.location.pathname === '/upload/' ? styles.active : ''}`}>
					<Link to="/upload/">Upload Assessment</Link>
				</div>
				<div className={`${styles.menuItem} ${this.context.router.route.location.pathname === '/start/' ? styles.active : ''}`}>
					<Link to="/start/">Start</Link>
				</div>
				<div className={`${styles.menuItem} ${this.context.router.route.location.pathname === '/assessment/' ? styles.active : ''}`}>
					<Link to="/assessment/">Assessment/Costing</Link>
				</div>
				<div className={`${styles.menuItem} ${this.context.router.route.location.pathname === '/results/' ? styles.active : ''}`}>
					<Link to="/results/">Results</Link>
				</div>
			</div>
		);
	}
}

Breadcrumbs.contextTypes = {
	router: PropTypes.object,
};
