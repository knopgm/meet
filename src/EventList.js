import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
  render() {
    const { events, number } = this.props;

    const eventListMap = events.map((event) => (
      <li className="event" key={event.id}>
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
        <ul className="EventList">
          {number !== "" ? eventListMap.slice(0, number) : eventListMap}
        </ul>
      </>
    );
  }
}

export default EventList;
