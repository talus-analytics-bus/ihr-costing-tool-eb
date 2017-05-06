import React, {Component} from 'react';

import styles from './Sidebar.css';

export class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        {this.props.children}
      </div>
    )
  }
}
