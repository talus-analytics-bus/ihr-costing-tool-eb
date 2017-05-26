import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.scss';

export class Breadcrumb extends Component {
  render() {
    return (
      <Link
        to={this.props.path}
        className={`${styles.menuItem} ${this.props.active ? styles.active : ''}`}
      >
        <span>{this.props.name}</span>
      </Link>
    );
  }
}
