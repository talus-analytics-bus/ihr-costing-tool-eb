import React, { Component } from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import styles from './CapacityTable.css';

export class CapacityTable extends Component {
  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn className={styles.headerColumn} />
            {
              this.props.capacity.columns.map((header) =>
                <TableHeaderColumn>{header}</TableHeaderColumn>
              )
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            this.props.capacity.data.map((row) =>
              <TableRow>
                <TableRowColumn className={styles.rowColumn}>{row.label}</TableRowColumn>
                {
                  row.columns.map((rowCell) =>
                    <TableRowColumn className={styles.rowColumn}>{rowCell}</TableRowColumn>
                  )
                }
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    );
  }
}
