import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import EventGenre from "./EventGenre";

import { extractLocations, getEvents, checkToken, getAccessToken } from "./api";
import NumberOfEvents from "./NumberOfEvents";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./nprogress.css";
import { InfoWarning } from "./Alert";
import WelcomeScreen from "./WelcomeScreen";

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: "",
    infoText: "",
    showInfo: false,
    showWelcomeScreen: undefined,
    buttonExpanded: false,
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
        if (!navigator.onLine) {
          this.setState({
            infoText: "Warning! Your network is not available.",
            showInfo: true,
          });
        } else {
          this.setState({
            showInfo: false,
          });
        }
      });
    }
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      // const [city] = location.split(", ");
      const city = location.split(", ").shift();
      return { city, number };
    });

    return data;
  };

  showDetailsToggle() {
    //if there is a click, the state goes from false to true, then true to false
    this.setState({ buttonExpanded: !this.state.buttonExpanded });
  }

  render() {
    const { locations, events } = this.state;
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;
    return (
      <div className="App">
        <div className="search-wrapper">
          <h1 className="AppTitle">Meet App</h1>
          <p className="AppSubtitle">Choose your nearest City:</p>

          <CitySearch
            // locations={this.state.locations}
            locations={locations}
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
        <div></div>
        <div
          className={
            this.state.buttonExpanded
              ? "charts-container charts-container-hide"
              : "charts-container"
          }
        >
          <button
            onClick={() => this.showDetailsToggle()}
            className={this.state.buttonExpanded ? "show-less" : "show-more"}
          >
            {/**button text is hide details if state is true, otherwise it's "see details" */}
            {this.state.buttonExpanded
              ? "Hide data charts"
              : "View Data Charts"}
          </button>
          {this.state.buttonExpanded && (
            <div className="data-vis-wrapper">
              <div>
                <h3 className="chart-title">Events by category</h3>
                <EventGenre events={events} />
              </div>
              <div>
                <h3 className="chart-title">Events in each city</h3>
                <ResponsiveContainer height={400}>
                  <ScatterChart
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <CartesianGrid />
                    <XAxis type="category" dataKey="city" />
                    <YAxis
                      allowDecimals={false}
                      type="number"
                      dataKey="number"
                      name="number of events"
                    />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Scatter data={this.getData()} fill="#8884d8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
        <div className="eventsWrapper">
          <EventList
            events={this.state.events}
            eventCount={this.state.eventCount}
          />
        </div>
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
