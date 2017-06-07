import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import styles from './CurrencyDropdown.css';

export class CurrencyDropdown extends Component {
	
	currencySort = (a,b) => {
		if(a.name < b.name) return -1;
		if(a.name > b.name) return 1;
		return 0;
	}
	
  render() {
	  this.props.currencies.sort(this.currencySort)
    return (
      <div className={styles.currencyDropdown}>
        <p>
          Choose currency for costing
        </p>
        <DropDownMenu value={this.props.active} onChange={ (e, i, v) => this.props.handleChange(v) }>
          {
            this.props.currencies
              .map((currency) => (
                <MenuItem key={currency.key} value={currency.key} primaryText={`${currency.name} (${currency.key})`} />
              ))
          }
        </DropDownMenu>
      </div>
    )
  }
}
