import React, { Component } from 'react';
import * as d3 from "d3";
import { jeeTree } from '../../../data/jeeTree.js';
import DataTables from 'material-ui-datatables';
import styles from '../Results.scss';


const formatMoney = d3.format('$,.0f');
const columns = [
	{ key: 'core', label: 'Core Capacity', sortable: true },
	{ key: 'capacity', label: 'Capacity', sortable: true },
	{ key: 'indicator_id', label: 'Indicator', sortable: true },
	{ key: 'year_1_cost', label: '1-year Cost', sortable: true },
	{ key: 'year_2_cost', label: '2-year Cost', sortable: true },
	{ key: 'year_5_cost', label: '5-year Cost', sortable: true },
];

const resultsData = [];
jeeTree.forEach((core) => {
	core.capacities.forEach((capacity) => {
		capacity.indicators.forEach((indicator) => {
			// add to data
			indicator.fixedCost = 1e5 * Math.random();
			indicator.recurringCost = 1e4 * Math.random();
			resultsData.push({
				core: core.name,
				capacity: capacity.name,
				indicator: indicator.name,
				indicator_id: indicator.jee_id,
				year_1_cost: formatMoney(indicator.fixedCost),
				year_2_cost: formatMoney(indicator.fixedCost + indicator.recurringCost),
				year_5_cost: formatMoney(indicator.fixedCost + 4 * indicator.recurringCost),
			});
		});
	});
});


export class CostTable extends Component {
	render() {
		return (
			<div className={styles.costTable}>
				<DataTables
					height={'auto'}
					selectable={false}
					columns={columns}
					data={resultsData}
					page={1}
					count={resultsData.length}
				/>
			</div>
		);
	}
}