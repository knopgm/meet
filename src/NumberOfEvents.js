import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    inputValue: "",
  };
  render() {
    const { onChange } = this.props;
    return (
      <div className="numberOfEvents">
        Number of Events:
        <input
          type="number"
          className="inputNumber"
          value={this.state.inputValue}
          onChange={(event) =>
            this.setState({ inputValue: event.target.value })
          }
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
