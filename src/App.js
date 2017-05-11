import React, { Component } from 'react';

import styles from './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Toolbar from 'material-ui/Toolbar';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import whoLogo from './images/WHO.png';
import georgetownLogo from './images/georgetown.png';
import talusLogo from './images/talus.png';

import { Home } from './scenes/Home/Home';
import { Identification } from './scenes/Identification/Identification';
import { Upload } from './scenes/Upload/Upload';
import { Start } from './scenes/Start/Start';
import { AssessmentActive } from './scenes/Assessment/AssessmentActive';
import { Costing } from './scenes/Costing/Costing';
import { Results } from './scenes/Results/Results';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#3071a9',
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <div className={styles.container}>
            <Toolbar className={styles.header}>
              <img
                alt={'World Health Organization'}
                className={styles.logo}
                src={whoLogo}
              />
              <div className={styles.toolbarTitle}>
                {<Link to="/">IHR Costing Tool</Link>}
              </div>
            </Toolbar>
            <div className={styles.main}>
              <Route exact path="/" component={Home}></Route>
              <Route path="/identification" component={Identification}></Route>
              <Route path="/upload" component={Upload}></Route>
              <Route path="/start" component={Start}></Route>
              <Route path="/assessment" component={AssessmentActive}></Route>
              <Route path="/Costing" component={Costing}></Route>
              <Route path="/Results" component={Results}></Route>
            </div>
            <div className={styles.footer}>
              <span>Built by </span>
              <span className={styles.georgetownLink}>
                <a href="https://www.georgetown.edu/" target="_blank">Georgetown University</a>
              </span>
              <span> &amp; </span>
              <span className={styles.talusLink}>
                <a href="http://www.talusanalytics.com" target="_blank">Talus Analytics</a>
              </span>
              <a href="https://www.georgetown.edu/" target="_blank">
                <img
                  alt={'Georgetown University'}
                  className={styles.georgetownLogo}
                  src={georgetownLogo}
                />
              </a>
              <a href="http://www.talusanalytics.com" target="_blank">
                <img
                  alt={'Talus Analytics'}
                  className={styles.talusLogo}
                  src={talusLogo}
                />
              </a>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
