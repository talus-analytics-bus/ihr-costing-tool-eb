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
            Object.keys(this.props.currencies)
              .map((currencyKey) => (
                <MenuItem value={currencyKey} primaryText={`${this.props.currencies[currencyKey].name} (${this.props.currencies[currencyKey].iso.code})`} />
              ))
          }
        </DropDownMenu>
      </div>
    )
  }
}
