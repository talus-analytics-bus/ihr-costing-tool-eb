import React, { Component } from 'react';
import d3 from 'd3';
import * as topojson from 'topojson';
import styles from './MapPicker.css';
import {CountryPath} from "../CountryPath/CountryPath";

const projection = (width, height) => {
  return d3.geo.mercator()
    .scale(80)
    .translate([width / 2, height / 1.5]);
}

const path = ({width = 0, height = 0}) => {
  return d3.geo.path()
    .projection(projection(width, height));
}

let pathEl;

export class MapPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      features: [],
      dimensions: {},
      activeCountry: this.props.activeCountry,
    }
  }

  componentWillReceiveProps(nextProps) {
    const cMap = nextProps.countryMap;
    let checkMap, features;

    if (this.props.countryMap !== {}) {
      features = topojson.feature(cMap, cMap.objects['countries-simplified']).features;

      this.setState({
        features
      });
      return;
    }

    checkMap = setInterval(() => {
      if (cMap !== {} && cMap !== this.props.countryMap) {
        features = topojson.feature(cMap, cMap.objects['countries-simplified']).features;

        this.setState({
          features
        });
        checkMap();
      }
    }, 1000);

  }

  componentDidMount() {
    const dimensions = this.refs.divEl.getBoundingClientRect();

    this.setState({
      dimensions,
    });
    pathEl = path(dimensions);
  }

  selectCountry = (country) => {
    this.setState({
      activeCountry: country.ISO_A2,
    });
    this.props.handleChange(country.ISO_A2);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.activeCountry !== this.state.activeCountry) {
      this.setState({
        activeCountry: nextProps.activeCountry,
      })
    }
  }

  render() {
    return (
      <div
        className={styles.mapPicker}
        ref="divEl"
      >
        <svg
          width={this.state.dimensions.width}
          height={this.state.dimensions.height}
        >
        {
          this.state.features.map((feature) =>
            <CountryPath
              key={feature.properties.NAME_LONG}
              d={pathEl(feature)}
              countryDetails={feature.properties}
              active={this.state.activeCountry === feature.properties.ISO_A2}
              handleTouchTap={this.selectCountry}
            ></CountryPath>
          )
        }
        </svg>
      </div>
    )
  }
}
