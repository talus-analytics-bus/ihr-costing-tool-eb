import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export class CountryDropdown extends Component {
  render() {
    return (
      <div>
        <p>
          What country would you like to assess and cost for?
        </p>
        <DropDownMenu value={this.props.active} onChange={this.props.handleChange}>
          {
            this.props.countries.map((country) => (
              <MenuItem value={country.country} primaryText={country.country} />
            ))
          }
        </DropDownMenu>
      </div>
    )
  }
}
