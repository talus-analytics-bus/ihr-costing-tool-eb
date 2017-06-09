import React, { Component } from 'react';

import styles from './App.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Toolbar from 'material-ui/Toolbar';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import globeIcon from './images/globe.png';
import georgetownLogo from './images/georgetown_wide.png';
import talusLogo from './images/talus.png';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';

import { Home } from './scenes/Home/Home';
import { Instructions } from './scenes/Instructions/Instructions';
import { IdentificationActive } from './scenes/Identification/IdentificationActive';
import { Upload } from './scenes/Upload/Upload';
import { Start } from './scenes/Start/Start';
import { AssessmentActive } from './scenes/Assessment/AssessmentActive';
import { Costing } from './scenes/Costing/Costing';
// import { Results } from './scenes/Results/Results';
import { Results2 } from './scenes/Results2/Results2';
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
        <Router onUpdate={() => window.scrollTo(0, 0)}>
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
            <Breadcrumbs />
            <div className={styles.main}>
              <Route exact path="/" component={Home}></Route>
              <Route path="/instructions" component={Instructions}></Route>
              <Route path="/identification" component={IdentificationActive}></Route>
              <Route path="/upload" component={Upload}></Route>
              <Route path="/start" component={Start}></Route>
              <Route path="/assessment" component={AssessmentActive}></Route>
              <Route path="/Costing" component={Costing}></Route>
              <Route path="/Results" component={Results2}></Route>
              <Route path="/directory" component={Directory}></Route>
            </div>
            <div className={styles.footer}>
				<table>
					<tr>
					<th>
						<a href="https://www.georgetown.edu/" target="_blank">
						<img
						  alt={'Georgetown University'}
						  className={styles.georgetownLogo}
						  src={georgetownLogo}
						/>
					  </a>
					</th>
					<th>
						<span className={styles.builtBy}>Built by</span>
					</th>
					<th>
						<a href="http://www.talusanalytics.com" target="_blank">
						<img
						  alt={'Talus Analytics'}
						  className={styles.talusLogo}
						  src={talusLogo}
						/>
					  </a>
					</th>
					</tr>
				</table>
			</div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
