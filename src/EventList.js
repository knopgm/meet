import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
  render() {
    const { events, eventCount } = this.props;

    const eventListMap = events.map((event, index) => (
      <li className="event" key={`${event.id}-${index}`}>
        <Event
          title={event.summary}
          dateTime={event.start.dateTime}
          location={event.location}
          description={event.description}
          link={event.htmlLink}
        />
      </li>
    ));
    return (
      <>
        <ul className="eventList">
          {eventCount !== ""
            ? eventListMap.slice(0, eventCount)
            : eventListMap.slice(0, 4)}
        </ul>
      </>
    );
  }
}

export default EventList;
