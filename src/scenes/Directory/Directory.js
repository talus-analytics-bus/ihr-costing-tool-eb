import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

import styles from './Directory.css';

export class Directory extends Component {
  render() {
    return (
      <div className={styles.directory}>
      	<h2 className={styles.directoryTitle}>Directory</h2>
      	<div className={styles.linkButtons}>
	      	<div className={styles.linkButtonContainer}>
	      		<h3 className={styles.linkTitle}>Home Page</h3>
	      		<div className={styles.linkDescription}>
	      			The entrance page of the IHR Costing Tool.
	      		</div>
		        <RaisedButton
		          primary={true}
		          label="Go to Home Page"
		          containerElement={<Link to="/identification" />}
		        />
		      </div>
	      	<div className={styles.linkButtonContainer}>
	      		<h3 className={styles.linkTitle}>Identification Page</h3>
	      		<div className={styles.linkDescription}>
	      			Enter the country you will be assessing and costing and details of the population.
	      		</div>
		        <RaisedButton
		          primary={true}
		          label="Go to Identification Page"
		          containerElement={<Link to="/identification" />}
		        />
		      </div>
	      	<div className={styles.linkButtonContainer}>
	      		<h3 className={styles.linkTitle}>Report Upload Page</h3>
	      		<div className={styles.linkDescription}>
	      			Upload any previous IHR Costing assessments completed.
	      		</div>
		        <RaisedButton
		          primary={true}
		          label="Go to Report Upload Page"
		          containerElement={<Link to="/upload" />}
		        />
		      </div>
	      	<div className={styles.linkButtonContainer}>
	      		<h3 className={styles.linkTitle}>Start Page</h3>
	      		<div className={styles.linkDescription}>
	      			Choose how you would like to proceed in assessing and costing.
	      		</div>
		        <RaisedButton
		          primary={true}
		          label="Go to Start Page"
		          containerElement={<Link to="/start" />}
		        />
		      </div>
	      	<div className={styles.linkButtonContainer}>
	      		<h3 className={styles.linkTitle}>Assessment/Costing Page</h3>
	      		<div className={styles.linkDescription}>
	      			Assess and cost for each of the capacities listed by the JEE tool.
	      		</div>
		        <RaisedButton
		          primary={true}
		          label="Go to Assessment/Costing Page"
		          containerElement={<Link to="/assessment" />}
		        />
		      </div>
	      	<div className={styles.linkButtonContainer}>
	      		<h3 className={styles.linkTitle}>Results Page</h3>
	      		<div className={styles.linkDescription}>
	      			View the results of the assessments and costing completed.
	      		</div>
		        <RaisedButton
		          primary={true}
		          label="Go to Results Page"
		          containerElement={<Link to="/results" />}
		        />
		      </div>
		    </div>
      </div>
    )
  }
}