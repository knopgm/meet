import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    inputValue: 32,
  };

  handleChange = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ inputValue: value });
    this.props.onChange(value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <p className="numberOfEventsSubtitle">Number of Events:</p>
        <input
          type="number"
          className="inputNumber"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default NumberOfEvents;
