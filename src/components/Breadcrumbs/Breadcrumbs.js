import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Breadcrumbs.scss';
import {Breadcrumb} from "../Breadcrumb/Breadcrumb";

const items = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Instructions',
    path: '/instructions/',
  },
  {
    name: 'Identification',
    path: '/identification/',
  },
  {
    name: 'Upload Assessment',
    path: '/upload/',
  },
  {
    name: 'Start',
    path: '/start/',
  },
  {
    name: 'Assessment/Costing',
    path: '/assessment/',
  },
  {
    name: 'Results',
    path: '/results/',
  }
]

export class Breadcrumbs extends Component {
	render() {
		return (
			<div className={styles.breadcrumbs}>
        {
          items.map((item) =>
            <Breadcrumb
              key={item.path}
              active={this.context.router.route.location.pathname === item.path}
              path={item.path}
              name={item.name}
            />
          )
        }
			</div>
		);
	}
}

Breadcrumbs.contextTypes = {
	router: PropTypes.object,
};
