import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  //   test("renders text input correctly", () => {
  //     const query = CitySearchWrapper.state("query");
  //     expect(CitySearchWrapper.find(".city").prop("value")).toBe(query);
  //   });

  test("render element with eventTitle className", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    expect(EventWrapper.find(".eventTitle")).toHaveLength(1);
  });

  test("render event title content correctly", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    expect(EventWrapper.find(".eventTitle").text()).toEqual("Title");
  });

  test("render element with dateTime className", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    expect(EventWrapper.find(".dateTime")).toHaveLength(1);
  });

  test("render event date and time correctly", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    expect(EventWrapper.find(".dateTime").text()).toEqual("Date-Time");
  });

  test("render element with location className", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });

  test("render event location correctly", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    expect(EventWrapper.find(".location").text()).toEqual("Location");
  });

  test("render button element with btn-showDetails className", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    expect(EventWrapper.find(".btn-showDetails")).toHaveLength(1);
  });

  test("simulate click event", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    EventWrapper.find(".btn-showDetails").simulate("click");
  });

  //Show Details of event test
  test("render element with subtitle className after simulate click", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".subtitle")).toHaveLength(1);
  });

  test("render text content of subtitle correctly after simulate click", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".subtitle").text()).toEqual("About event:");
  });

  test("render element with eventLink className after simulate click", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".eventLink")).toHaveLength(1);
  });

  test("render text content of eventLink correctly after simulate click", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".eventLink").text()).toEqual(
      "See details on Google Calendar"
    );
  });

  test("render element with eventDescription className after simulate click", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".eventDescription")).toHaveLength(1);
  });

  test("render text content of eventDescription correctly after simulate click", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".eventDescription").text()).toEqual(
      "Event description"
    );
  });

  test("render element with btn-hideDetails className after simulate click", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".btn-hideDetails")).toHaveLength(1);
  });

  test("render text content of btn-hideDetails correctly after simulate click", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".btn-hideDetails").text()).toEqual(
      "hide details"
    );
  });
});
