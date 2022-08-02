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
    const { title, dateTime, location, description, link } = this.props;

    const renderEventDetails = () => {
      if (showDetails) {
        return (
          <div className="eventCardWrapper">
            <div className="eventInfosWrapper">
              <h3 className="subtitle">About event:</h3>
              <a href="{link}" target="_blank" className="eventLink">
                See details on Google Calendar
              </a>
              <p className="eventDescription">{description}</p>
            </div>

            <div className="button-wrapper">
              <button
                className="btn-hideDetails"
                onClick={() => this.handleToggleDetails()}
              >
                hide details
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div className="button-wrapper">
            <button
              className="btn-showDetails"
              onClick={() => this.handleToggleDetails()}
            >
              Show Details
            </button>
          </div>
        );
      }
    };
    return (
      <div>
        <h1 className="eventTitle">{title}</h1>
        <p className="dateTime">{dateTime}</p>

        <span>@{title} | </span>
        <p className="location">{location}</p>

        {renderEventDetails()}
      </div>
    );
  }
}
export default Event;
