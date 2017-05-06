import React, { Component } from 'react';

import styles from './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import { Home } from './scenes/Home/Home';
import { Identification } from './scenes/Identification/Identification';
import { Start } from './scenes/Start/Start';
import { AssessmentActive } from './scenes/Assessment/AssessmentActive';
import { Costing } from './scenes/Costing/Costing';
import { Results } from './scenes/Results/Results';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className={styles.container}>
            <Toolbar className={styles.header}>
                <ToolbarTitle text={<Link to="/">IHR Costing Tool</Link>} />
            </Toolbar>
            <div className={styles.main}>
              <Route exact path="/" component={Home}></Route>
              <Route path="/identification" component={Identification}></Route>
              <Route path="/start" component={Start}></Route>
              <Route path="/assessment" component={AssessmentActive}></Route>
              <Route path="/Costing" component={Costing}></Route>
              <Route path="/Results" component={Results}></Route>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
