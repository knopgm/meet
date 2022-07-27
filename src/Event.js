import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleToggleDetails = () => {
    const currentState = this.state.showDetails;
    this.setState({ showDetails: !currentState });
  };

  render() {
    const { showDetails } = this.state;

    const renderEventDetails = () => {
      if (showDetails) {
        return (
          <div>
            <h3 className="subtitle">About event:</h3>
            <a href="..." className="eventLink">
              See details on Google Calendar
            </a>
            <p className="eventDescription">Event description</p>
            <button
              className="btn-hideDetails"
              onClick={() => this.handleToggleDetails()}
            >
              hide details
            </button>
          </div>
        );
      } else {
        return (
          <button
            className="btn-showDetails"
            onClick={() => this.handleToggleDetails()}
          >
            Show Details
          </button>
        );
      }
    };
    return (
      <div>
        <h1 className="eventTitle">Title</h1>
        <p className="dateTime">Date-Time</p>
        <p className="location">Location</p>

        {renderEventDetails()}
      </div>
    );
  }
}
export default Event;
