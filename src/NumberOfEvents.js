import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    inputValue: 32,
    errorText: "",
    showError: false,
  };

  handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    if (value < 0 || value > 32) {
      this.setState({
        inputValue: value,
        errorText: "Select number from 1 to 32",
        showError: true,
      });
      this.props.onChange(value);
    } else {
      this.setState({
        inputValue: value,
        errorText: "",
        showError: false,
      });
      this.props.onChange(value);
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <p className="numberOfEventsSubtitle">Number of Events:</p>
        <div
          className="errorAlertWrapper"
          style={this.state.showError ? {} : { display: "none" }}
        >
          <ErrorAlert text={this.state.errorText} />
        </div>

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
