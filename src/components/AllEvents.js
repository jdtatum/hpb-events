import React, { Component } from 'react';
import eventData from '../data/hpbevents.json';
import SingleEvent from './SingleEvent';

class AllEvents extends Component {
  constructor() {
    super();

    // getinitialState
    this.state = {
      events: {...eventData}
    };
  }

  render() {
    return (
        <div className="allEvents col-md-8">
            {
              Object
                .keys(this.state.events)
                .filter(key => this.props.filter ? this.state.events[key].eventArea === this.props.filter : this.state.events[key].eventNum !== null )
                .map(key => <SingleEvent key={key} index={key} details={this.state.events[key]} />)
            }
        </div>
    )
  }
}

export default AllEvents;
