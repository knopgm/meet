import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
  render() {
    const { events, number } = this.props;

    const eventListMap = events.map((event) => (
      <li key={event.id}>
        <Event event={event} />
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
