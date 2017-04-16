import React, {Component} from 'react';

import styles from './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

import { Api } from './data/api';
import {Sidebar} from './components/Sidebar/Sidebar';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableOfContents: [],
    };
  }

  componentDidMount() {
    Api.fetchTableOfContents()
      .then((tableOfContents) => {
        this.setState({
          tableOfContents,
        })
      });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className={styles.container}>
          <Toolbar className={styles.header}>
            <ToolbarGroup firstChild={true}>
              Test
            </ToolbarGroup>
          </Toolbar>
          <div className={styles.main}>
            <Sidebar contents={this.state.tableOfContents} />
            <div className={styles.content}>Main Content</div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
