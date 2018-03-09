import React, { Component } from 'react';
import './App.css';
import AllEvents from './components/AllEvents';
import EventFilter from './components/EventFilter';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filter: null
    }
  }

  handleFilter = (filter) => {
        this.setState({filter: filter});
  }

  render() {
    return (
      <div className="App row">
        <EventFilter onFilterChange={ this.handleFilter } />
        <AllEvents filter={ this.state.filter }/>
      </div>
    );
  }
}

export default App;
