import React from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  test("render element with numberOfEvents className", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents events={mockData} />);
    expect(NumberOfEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
  });

  test("render content text of numberOfEvents className correctly", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents events={mockData} />);
    expect(NumberOfEventsWrapper.find(".numberOfEvents").text()).toEqual(
      "Number of Events:"
    );
  });

  test("render text input", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents events={mockData} />);
    expect(NumberOfEventsWrapper.find(".inputNumber")).toHaveLength(1);
  });

  test("renders text input correctly", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents events={mockData} />);
    const number = NumberOfEventsWrapper.state("number");
    expect(NumberOfEventsWrapper.find(".inputNumber").prop("value")).toBe(
      number
    );
  });

  test("change state when text input changes", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents events={mockData} />);
    NumberOfEventsWrapper.setState({
      number: "2",
    });
    const eventObject = { target: { value: "0" } };
    NumberOfEventsWrapper.find(".inputNumber").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("number")).toBe("0");
  });
});
