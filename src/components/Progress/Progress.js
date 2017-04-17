import React, { Component } from 'react';

import LinearProgress from 'material-ui/LinearProgress';

export class Progress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      overall: 170,
      completed: 70,
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.progress(15), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (this.state.completed + completed > this.state.overall) {
      this.setState({completed: 70});
    } else {
      this.setState({completed: this.state.completed + completed });
    }
  }

  render() {
    return (
      <div className="progress">
        <LinearProgress mode="determinate" value={this.state.completed/this.state.overall*100} />
        <div className="progress-text">
          current progress ({this.state.completed}/{this.state.overall})
        </div>
      </div>
    )
  }
}

