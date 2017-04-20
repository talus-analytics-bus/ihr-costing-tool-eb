import React, { Component } from 'react';

import styles from './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

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
            <Router>
              <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/Costing" component={Costing}></Route>
                <Route path="/Results" component={Results}></Route>
              </div>
            </Router>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
