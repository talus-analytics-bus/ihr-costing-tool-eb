import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export class CurrencyDropdown extends Component {
  render() {
    return (
      <div>
        <p>
          What currency would you like to work with?
        </p>
        <DropDownMenu value={this.props.active} onChange={this.props.handleChange}>
          {
            this.props.currencies
              .map((currency) => (
                <MenuItem value={currency.key} primaryText={`${currency.name} (${currency.key})`} />
              ))
          }
        </DropDownMenu>
      </div>
    )
  }
}
