import React, { Component } from 'react';

export class EventFilter extends Component {
  constructor() {
    super();
    this.state = {
      filter: null
    }
  }

  handleFilterChange = (filter) => {
    this.props.onFilterChange(filter);
  }

  render() {
    return (
      <div className="ui-group col-md-3">
        <h3>Filter By Location</h3>

        <div className="button-group js-radio-button-group" data-filter-group="states">
          <h4>All Locations</h4>
            <button onClick={() => this.handleFilterChange('')}>All Stores</button>
          <h4>Arizona</h4>
            <button onClick={() => this.handleFilterChange('Phoenix Area')}>Phoenix Area</button>
          <h4>California</h4>
            <button onClick={() => this.handleFilterChange('Sacramento Area')}>Sacramento Area</button>
            <button onClick={() => this.handleFilterChange('San Francisco Area')}>San Francisco Area</button>
          <h4>Georgia</h4>
            <button onClick={() => this.handleFilterChange('Atlanta Area')}>Atlanta Area</button>
          <h4>Illinois</h4>
            <button onClick={() => this.handleFilterChange('Chicago Area')}>Chicago Area</button>
          <h4>Indiana</h4>
            <button onClick={() => this.handleFilterChange('Fort Wayne Area')}>Fort Wayne Area</button>
            <button onClick={() => this.handleFilterChange('Indianapolis Area')}>Indianapolis Area</button>
          <h4>Iowa</h4>
            <button onClick={() => this.handleFilterChange('Cedar Rapids Area')}>Cedar Rapids Area</button>
            <button onClick={() => this.handleFilterChange('Des Moines Area')}>Des Moines Area</button>
          <h4>Kansas</h4>
            <button onClick={() => this.handleFilterChange('Kansas City Area')}>Kansas City Area</button>
          <h4>Kentucky</h4>
            <button onClick={() => this.handleFilterChange('Lexington Area')}>Lexington Area</button>
            <button onClick={() => this.handleFilterChange('Louisville Area')}>Louisville Area</button>
          <h4>Minnesota</h4>
            <button onClick={() => this.handleFilterChange('Louisville Area')}>Twin Cities Area</button>
          <h4>Missouri</h4>
            <button onClick={() => this.handleFilterChange('St. Louis Area')}>St. Louis Area</button>
            <button onClick={() => this.handleFilterChange('Kansas City Area')}>Kansas City Area</button>
          <h4>Nebraska</h4>
            <button onClick={() => this.handleFilterChange('Omaha Area')}>Omaha Area</button>
          <h4>Ohio</h4>
            <button onClick={() => this.handleFilterChange('Cincinnati Area')}>Cincinnati Area</button>
            <button onClick={() => this.handleFilterChange('Cleveland Area')}>Cleveland Area</button>
            <button onClick={() => this.handleFilterChange('Columbus Area')}>Columbus Area</button>
            <button onClick={() => this.handleFilterChange('Dayton Area')}>Dayton Area</button>
          <h4>Oklahoma</h4>
            <button onClick={() => this.handleFilterChange('Oklahoma Area')}>Oklahoma City Area</button>
          <h4>Pennsylvania</h4>
            <button onClick={() => this.handleFilterChange('Pittsburgh Area')}>Pittsburgh Area</button>
          <h4>Texas</h4>
            <button onClick={() => this.handleFilterChange('Austin Area')}>Austin Area</button>
            <button onClick={() => this.handleFilterChange('Bryan Area')}>Bryan/College Station Area</button>
            <button onClick={() => this.handleFilterChange('Corpus Christi Area')}>Corpus Christi Area</button>
            <button onClick={() => this.handleFilterChange('DFW Area')}>Dallas/Fort Worth Area</button>
            <button onClick={() => this.handleFilterChange('Houston Area')}>Houston Area</button>
            <button onClick={() => this.handleFilterChange('San Antonio Area')}>San Antonio Area</button>
          <h4>Washington</h4>
            <button onClick={() => this.handleFilterChange('Seattle Area')}>Seattle Area</button>
          <h4>Wisconsin</h4>
            <button onClick={() => this.handleFilterChange('Green Bay Area')}>Green Bay Area</button>
            <button onClick={() => this.handleFilterChange('Madison Area')}>Madison Area</button>
            <button onClick={() => this.handleFilterChange('Milwaukee Area')}>Milwaukee Area</button>
        </div>
      </div>
    )
  }
}

export default EventFilter;
