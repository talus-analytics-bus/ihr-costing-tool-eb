import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

const listItems = (items) => items.map((item) =>
  <ListItem>{item.label}</ListItem>
);

class ListGroup extends Component {
  render() {
    return (
      <List>
        <Subheader>{this.props.label}</Subheader>
        {listItems(this.props.items)}
      </List>
    );
  }
}

const listWithDividers = (tableOfContents = []) => tableOfContents.reduce((prev, curr, index) => {
  prev.push({
    type: 'listGroup',
    data: curr,
  });
  if (index < tableOfContents.length - 1) {
    prev.push({
      type: 'divider',
    })
  }
  return prev;
}, []);

export class TableOfContents extends Component {
  render() {
    return (
      <div className="tableOfContents">
        {listWithDividers(this.props.contents).map((grouping) => {
          if (grouping.type === 'listGroup') {
            return (
              <ListGroup label={grouping.data.label} items={grouping.data.items}/>
            )
          }
          return (
            <Divider />
          )
        })}
      </div>
    )
  }
}
