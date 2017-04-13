import React, { Component } from 'react';

import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { List, ListItem } from 'material-ui/List';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="container">
                <Toolbar className="header">
                    <ToolbarGroup firstChild={true}>
                        Test
                    </ToolbarGroup>
                </Toolbar>
                <div className="main">
                    <List className="sidebar">
                        <ListItem>Test</ListItem>
                        <ListItem>Test2</ListItem>
                    </List>
                    <div className="content">Main Content</div>
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
