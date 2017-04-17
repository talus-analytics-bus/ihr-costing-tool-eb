import React, { Component } from 'react';

import { Api } from '../../data/api';
import { Sidebar } from '../../components/Sidebar/Sidebar';

import styles from './Costing.css';

export class Costing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableOfContents: [],
    };
  }

  componentDidMount() {
    Api.fetchTableOfContents()
      .then((tableOfContents) => {
        this.setState({
          tableOfContents,
        })
      });
  }

  render() {
    return (
      <div className={styles.costing}>
        <Sidebar contents={this.state.tableOfContents} />
        <div className={styles.content}>Main Content</div>
      </div>
    )
  }
}
