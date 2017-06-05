import React, {Component} from 'react';
import styles from './Instructions.scss';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'

export class Instructions extends Component {

  render() {
    return (
      <div className={styles.instructions}>
        <div>
          <h1>Instructions</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien tristique tellus vehicula
            imperdiet eget sed sem. Phasellus porttitor feugiat ligula, in luctus turpis viverra eget. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut sit amet malesuada orci.
            Vivamus luctus interdum tellus. Integer vitae urna pretium, ultricies libero sed, dictum nunc. Aenean
            cursus, metus ut semper tristique, eros odio tempus nisl, et semper lectus orci a quam. Donec in blandit
            nulla. Suspendisse ipsum elit, vulputate in purus non, fermentum fringilla ex. Nam ac lacinia urna. Integer
            porttitor sollicitudin lorem a eleifend. Curabitur fringilla arcu massa, fermentum fringilla ante interdum
            quis. Curabitur placerat malesuada metus vel rutrum. Nulla vel lorem velit.</p>
        </div>
        <div>
          <h2>Before Starting</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien tristique tellus vehicula
            imperdiet eget sed sem. Phasellus porttitor feugiat ligula, in luctus turpis viverra eget. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut sit amet malesuada orci.
            Vivamus luctus interdum tellus. Integer vitae urna pretium, ultricies libero sed, dictum nunc. Aenean
            cursus, metus ut semper tristique, eros odio tempus nisl, et semper lectus orci a quam. Donec in blandit
            nulla. Suspendisse ipsum elit, vulputate in purus non, fermentum fringilla ex. Nam ac lacinia urna. Integer
            porttitor sollicitudin lorem a eleifend. Curabitur fringilla arcu massa, fermentum fringilla ante interdum
            quis. Curabitur placerat malesuada metus vel rutrum. Nulla vel lorem velit.</p>
        </div>
        <div>
          <h2>Process Overview</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien tristique tellus vehicula
            imperdiet eget sed sem. Phasellus porttitor feugiat ligula, in luctus turpis viverra eget. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut sit amet malesuada orci.
            Vivamus luctus interdum tellus. Integer vitae urna pretium, ultricies libero sed, dictum nunc. Aenean
            cursus, metus ut semper tristique, eros odio tempus nisl, et semper lectus orci a quam. Donec in blandit
            nulla. Suspendisse ipsum elit, vulputate in purus non, fermentum fringilla ex. Nam ac lacinia urna. Integer
            porttitor sollicitudin lorem a eleifend. Curabitur fringilla arcu massa, fermentum fringilla ante interdum
            quis. Curabitur placerat malesuada metus vel rutrum. Nulla vel lorem velit.</p>
        </div>
        <div className={styles.instructionsAction}>
          <RaisedButton
            primary={true}
            label="Start"
            containerElement={<Link to="/identification/" />}
          />
        </div>
      </div>
    )
  }

}
