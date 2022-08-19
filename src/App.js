import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";

import { extractLocations, getEvents } from "./api";
import NumberOfEvents from "./NumberOfEvents";

import "./nprogress.css";
import { InfoWarning } from "./Alert";

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: "",
    infoText: "",
    showInfo: false,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
      if (!navigator.onLine) {
        this.setState({
          infoText:
            "Warning! Your network is not available. The list of events displayed has been loaded from the last conected vizualization.",
          showInfo: true,
        });
      } else {
        this.setState({
          showInfo: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  };

  handleInputChange = (inputValue) => {
    this.setState({
      eventCount: inputValue,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="search-wrapper">
          <h1 className="AppTitle">Meet App</h1>
          <p className="AppSubtitle">Choose your nearest City:</p>

          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />
          <NumberOfEvents onChange={this.handleInputChange} />
          <div
            className="infoAlertWrapper"
            style={this.state.showInfo ? {} : { display: "none" }}
          >
            <InfoWarning text={this.state.infoText} />
          </div>
        </div>
        <div className="eventsWrapper">
          <EventList
            events={this.state.events}
            eventCount={this.state.eventCount}
          />
        </div>
      </div>
    );
  }
}

export default App;
