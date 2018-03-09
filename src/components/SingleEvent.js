import React, { Component } from 'react';
import { Markdown } from 'react-showdown';
import { addZeroes } from '../helpers';

class SingleEvent extends Component {
  render() {
    const { details } = this.props;
    const formattedStoreNo = addZeroes(this.props.details.storeNo, 3);
    const storeURL = `http://hpb.com/${formattedStoreNo}`;

    return (
      <div className="event" data-limit={details.eventDownDate}>

          <div className="col-md-2 eventtime">
              <span className="day"></span><br />
              <span className="date">{details.eventDate}</span><br />
              <span className="time">{details.eventTime}</span><br />
              <span>{details.eventNum}</span>
          </div>

          <div className="col-md-10 eventdesc">
            <span>{details.eventCity}, {details.eventState} / {details.eventArea}</span><br />
            <span className="title">{details.eventTitle}</span><br />
            <span className="description"><Markdown markup={details.eventDesc} /></span><br />
            <span className="glyphicon glyphicon-map-marker"></span>
            <span className="location"><a href={storeURL}>HPB STORE NAME - ADDRESS</a></span><br />
          </div>
      </div>
    )
  }
}

export default SingleEvent;
