import React, { Component } from 'react';
import styles from './CountryPath.css';

export class CountryPath extends Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: [
        styles.countryPath
      ].concat(this.props.active ? [styles.countryPathActive] : [])
    }
  }

  handleMouseOver = () => this.setState({
    styles: this.state.styles.concat([styles.countryPathHover])
  });

  handleMouseLeave = () => this.setState({
    styles: this.state.styles.filter((style) => style !== styles.countryPathHover)
  });

  handleTouchTap = () => {
    this.props.handleTouchTap(this.props.countryDetails);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.active !== this.props.active) {
      if (nextProps.active) {
        this.setState({
          styles: this.state.styles.concat([styles.countryPathActive])
        });
        return;
      }
      this.setState({
        styles: this.state.styles.filter((style) => style !== styles.countryPathActive)
      });
    }
  }

  render() {
    return (
      <path
        d={this.props.d}
        className={this.state.styles.join(' ')}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleTouchTap}
      ></path>
    )
  }
}
