import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    number: "",
  };

  handleInputChanged = (event) => {
    this.setState({
      number: event.target.value,
    });
  };

  render() {
    return (
      <div className="numberOfEvents">
        Number of Events:
        <input
          type="number"
          className="inputNumber"
          value={this.state.number}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}
export default NumberOfEvents;
