import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  test("render element with numberOfEvents className", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
  });

  test("render content text of numberOfEvents className correctly", () => {
    const NumberOfEventsWrapper = shallow(
      <NumberOfEvents onChange={() => {}} />
    );
    expect(NumberOfEventsWrapper.find(".numberOfEvents").text()).toEqual(
      "Number of Events:"
    );
  });

  test("render text input", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find(".inputNumber")).toHaveLength(1);
  });

  test("renders text input correctly", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find(".inputNumber").prop("value")).toBe(32);
  });

  test("change state when text input changes", () => {
    const NumberOfEventsWrapper = shallow(
      <NumberOfEvents onChange={() => {}} />
    );
    const eventObject = { target: { value: "14" } };
    NumberOfEventsWrapper.find(".inputNumber").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("inputValue")).toBe("14");
  });
});
