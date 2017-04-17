import React, {Component} from 'react';

import { TableOfContents } from './components/TableOfContents/TableOfContents';
import { Progress } from '../Progress/Progress';

import styles from './Sidebar.css';

export class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <TableOfContents contents={this.props.contents} />
        <Progress />
      </div>
    )
  }
}
