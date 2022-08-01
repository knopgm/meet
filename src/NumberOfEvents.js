import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    inputValue: "",
  };
  render() {
    const { onChange, eventCount } = this.props;
    return (
      <div className="numberOfEvents">
        <p className="numberOfEventsSubtitle">Number of Events:</p>
        <input
          type="number"
          className="inputNumber"
          value={this.state.inputValue}
          onChange={(event) =>
            this.setState({ inputValue: event.target.value })
          }
          placeholder={eventCount}
        />
        <button
          className="numberOfEvents-btn"
          onClick={() => onChange(this.state.inputValue)}
        >
          Confirm
        </button>
      </div>
    );
  }
}
export default NumberOfEvents;
