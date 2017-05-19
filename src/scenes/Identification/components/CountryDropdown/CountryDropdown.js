import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import styles from './CountryDropdown.css';

export class CountryDropdown extends Component {
	
	countrySort = (a,b) => {
		if(a.name < b.name) return -1;
		if(a.name > b.name) return 1;
		return 0;
	}
	
  render() {
	  this.props.countries.sort(this.countrySort)
    return (
      <div className={styles.countryDropdown}>
        <p>
          What country would you like to assess and cost for2?
        </p>
        <DropDownMenu
          maxHeight={300}
          value={this.props.active}
          onChange={ (e, i, v) => this.props.handleChange(v)}>
          {
			  
            this.props.countries.map((country) => (
              <MenuItem key={country.abbreviation} value={country.abbreviation} primaryText={country.name} />
            ))
          }
        </DropDownMenu>
      </div>
    )
  }
}
