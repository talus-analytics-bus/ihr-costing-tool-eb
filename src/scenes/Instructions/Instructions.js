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
          <p>The goal of the IHR Costing Tool is to provide national leaders with realistic cost information to  
          plan for initial IHR compliance and sustainable public health capacity development.</p>
        </div>
        <div>
          <h2>Before Starting</h2>
          <p>Current JEE assessment scores are needed to use the IHR Costing Tool. Indicator scores should be from a recent
          JEE assessment report. The full JEE Tool is available <a href="http://apps.who.int/iris/bitstream/10665/204368/1/9789241510172_eng.pdf" 
          target="_blank">here</a>.</p>
          <p>It is also useful to have any local cost information in use for public health planning available before starting. 
          This includes salary information for public health workers (e.g. laboratory technicians, epidemiologists, etc.), 
          costs for training, meetings, common laboratory supplies, and office equipment. 
          Default costs are provided throughout the tool where available, but should be replaced by country-specific data 
          wherever possible for the most accurate cost estimates.</p> 

        </div>
        <div>
          <h2>Process Overview</h2>
          <p>First, the tool is customized for country-specific costing including currency, country population, 
          geopolitical organization, and public health infrastructure.</p> 

          <p>After customizing for the country, current JEE assessment scores are used to define what spending is
          required to further IHR implementation. The tool calculates costs based on stepping to the next capacity 
          level (score) for all indicators. JEE assessment scores are either selected sequentially
          for each JEE indicator or uploaded using a specified file format. Based on the new target score for each
          capacity, the tool steps through the costing process which involves reviewing default cost calculations, 
          supplying specific local costs, and in select cases choosing between two approaches to achieve a capacity.</p> 

          <p>Finally, after all indicator assessment scores are entered and costing is complete, the interactive 
          results page summarizes cost information by core capacity or indicator with ability to view costs by type 
          (e.g. human capabilities, technology, consumables, etc.) and by start-up, recurring annual costs, or a 
          5-year cost estimate.</p> 

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
