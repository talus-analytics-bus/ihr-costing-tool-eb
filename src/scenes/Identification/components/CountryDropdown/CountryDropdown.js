import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import styles from './CountryDropdown.css';

export class CountryDropdown extends Component {
  render() {
    return (
      <div className={styles.countryDropdown}>
        <p>
          What country would you like to assess and cost for?
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
