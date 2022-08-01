import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  test("render element with numberOfEvents className", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
  });

  test("render content text of numberOfEvents className correctly", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find(".numberOfEvents").text()).toEqual(
      "Number of Events:Confirm"
    );
  });

  test("render text input", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find(".inputNumber")).toHaveLength(1);
  });

  test("renders text input correctly", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find(".inputNumber").prop("value")).toBe("");
  });

  test("change state when text input changes", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    const eventObject = { target: { value: "14" } };
    NumberOfEventsWrapper.find(".inputNumber").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("inputValue")).toBe("14");
  });

  test("render element with numberOfEvents-btn className", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find(".numberOfEvents-btn")).toHaveLength(1);
  });

  test("render content text of numberOfEvents-btn className correctly", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find(".numberOfEvents-btn").text()).toEqual(
      "Confirm"
    );
  });

  test("call onChange prop with current input value on Confirm btn click", () => {
    const mockOnChange = jest.fn();
    const NumberOfEventsWrapper = shallow(
      <NumberOfEvents onChange={mockOnChange} />
    );
    const eventObject = { target: { value: "14" } };
    NumberOfEventsWrapper.find(".inputNumber").simulate("change", eventObject);
    NumberOfEventsWrapper.find(".numberOfEvents-btn").simulate("click");
    expect(mockOnChange.mock.calls.length).toEqual(1);
    expect(mockOnChange.mock.calls[0][0]).toBe("14");
  });
});
