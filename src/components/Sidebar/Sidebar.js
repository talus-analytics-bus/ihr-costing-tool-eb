import React, {Component} from 'react';

import { TableOfContents } from './components/TableOfContents/TableOfContents';

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <TableOfContents contents={this.props.contents} />
      </div>
    )
  }
}
