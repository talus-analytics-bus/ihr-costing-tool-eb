import React, { Component } from 'react';

import styles from './App.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Toolbar from 'material-ui/Toolbar';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import globeIcon from './images/globe.png';
import georgetownLogo from './images/georgetown_wide.png';
import talusLogo from './images/talus.png';

import { Home } from './scenes/Home/Home';
import { IdentificationActive } from './scenes/Identification/IdentificationActive';
import { Upload } from './scenes/Upload/Upload';
import { Start } from './scenes/Start/Start';
import { AssessmentActive } from './scenes/Assessment/AssessmentActive';
import { Costing } from './scenes/Costing/Costing';
import { Results } from './scenes/Results/Results';
import { Directory } from './scenes/Directory/Directory';

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
                alt={'Globe'}
                className={styles.logo}
                src={globeIcon}
				  />
              <div className={styles.toolbarTitle}>
                {<Link to="/">IHR Costing Tool</Link>}
              </div>
            </Toolbar>
            <div className={styles.main}>
              <Route exact path="/" component={Home}></Route>
              <Route path="/identification" component={IdentificationActive}></Route>
              <Route path="/upload" component={Upload}></Route>
              <Route path="/start" component={Start}></Route>
              <Route path="/assessment" component={AssessmentActive}></Route>
              <Route path="/Costing" component={Costing}></Route>
              <Route path="/Results" component={Results}></Route>
              <Route path="/directory" component={Directory}></Route>
            </div>
            <div className={styles.footer}>
              <a href="https://www.georgetown.edu/" target="_blank">
                <img
                  alt={'Georgetown University'}
                  className={styles.georgetownLogo}
                  src={georgetownLogo}
                />
              </a>
			  <br></br>
              {/*<span className={styles.georgetownLink}>
                <a href="https://www.georgetown.edu/" target="_blank">Georgetown University</a>
              </span>*/}
              <span className={styles.builtBy}>Built by </span>
              {/*<span>, </span>*/}
				  {/*<span className={styles.talusLink}>
                <a href="http://www.talusanalytics.com" target="_blank">Talus Analytics</a>
				  </span>*/}
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
