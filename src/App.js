import React, { Component } from 'react';

import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import { Sidebar } from './components/Sidebar';

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
                    <Sidebar />
                    <div className="content">Main Content</div>
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
