import React, { Component } from 'react';

import styles from './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import { Tabs, Tab } from 'material-ui/Tabs';

import { Home } from './scenes/Home/Home';
import { Costing } from './scenes/Costing/Costing';
import { Results } from './scenes/Results/Results';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className={styles.container}>
          <Toolbar className={styles.header}>
            <ToolbarTitle text="IHR Costing Tool" />
          </Toolbar>
          <div className={styles.main}>
            <Tabs className={styles.tabs}>
              <Tab label="Home">
                <Home />
              </Tab>
              <Tab label="Assessment/Costing">
                <Costing />
              </Tab>
              <Tab label="Results">
                <Results />
              </Tab>
            </Tabs>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
