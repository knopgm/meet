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
    const { title, dateTime, location, description } = this.props;

    const renderEventDetails = () => {
      if (showDetails) {
        return (
          <div>
            <h3 className="subtitle">About event:</h3>
            <a href="..." className="eventLink">
              See details on Google Calendar
            </a>
            <p className="eventDescription">{description}</p>
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
        <h1 className="eventTitle">{title}</h1>
        <p className="dateTime">{dateTime}</p>
        <p className="location">{location}</p>

        {renderEventDetails()}
      </div>
    );
  }
}
export default Event;
