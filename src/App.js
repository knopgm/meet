import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";

import { extractLocations, getEvents } from "./api";
import NumberOfEvents from "./NumberOfEvents";

import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    number: "",
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
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
      number: inputValue,
    });
  };

  render() {
    return (
      <div className="App">
        Search for Events in a City:
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents onChange={this.handleInputChange} />
        <EventList events={this.state.events} number={this.state.number} />
      </div>
    );
  }
}

export default App;
