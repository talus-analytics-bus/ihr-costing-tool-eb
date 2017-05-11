import React, { Component } from 'react';
import d3 from 'd3';
import DataTables from 'material-ui-datatables';
import styles from '../Results.css';

import { jeeTree } from '../../../data/jeeTree.js'; /* will want to import via api */


const columns = [
	{ key: 'id', label: 'ID' },
	{ key: 'name', label: 'Name' }	
];

const testData = [
	{ id: 1, name: 'Jeff' },
	{ id: 2, name: 'Nic' }
];

export class CostSummary extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			data: testData,
			page: 1,
		};
	}

	render() {
		return (
			<div className={styles.costSummaryContainer}>
				<div className={styles.costTableContainer}>
					<DataTables
						height={'auto'}
						selectable={false}
						showRowHover={true}
						columns={columns}
						data={testData}
						page={1}
						count={testData.length}
					/>
				</div>
			</div>
		);
	}
}