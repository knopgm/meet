import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  test("render element with eventTitle className", () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find(".eventTitle")).toHaveLength(1);
  });

  test("render event title content correctly", () => {
    const event = mockData[0];
    const EventWrapper = shallow(<Event title={event.summary} />);
    expect(EventWrapper.find(".eventTitle").text()).toEqual(event.summary);
  });

  test("render element with dateTime className", () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find(".dateTime")).toHaveLength(1);
  });

  test("render event date and time correctly", () => {
    const event = mockData[0];
    const EventWrapper = shallow(<Event dateTime={event.start.dateTime} />);
    expect(EventWrapper.find(".dateTime").text()).toEqual(event.start.dateTime);
  });

  test("render element with location className", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });

  test("render event location correctly", () => {
    const event = mockData[0];
    const EventWrapper = shallow(<Event location={event.location} />);
    expect(EventWrapper.find(".location").text()).toEqual(event.location);
  });

  test("render button element with btn-showDetails className", () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find(".btn-showDetails")).toHaveLength(1);
  });

  test("simulate click event", () => {
    const EventWrapper = shallow(<Event />);
    EventWrapper.find(".btn-showDetails").simulate("click");
  });

  //Show Details of event test
  test("render element with subtitle className after simulate click", () => {
    const EventWrapper = shallow(<Event />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".subtitle")).toHaveLength(1);
  });

  test("render text content of subtitle correctly after simulate click", () => {
    const EventWrapper = shallow(<Event />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".subtitle").text()).toEqual("About event:");
  });

  test("render element with eventLink className after simulate click", () => {
    const EventWrapper = shallow(<Event />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".eventLink")).toHaveLength(1);
  });

  test("render text content of eventLink correctly after simulate click", () => {
    const EventWrapper = shallow(<Event />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".eventLink").text()).toEqual(
      "See details on Google Calendar"
    );
  });

  test("render element with eventDescription className after simulate click", () => {
    const EventWrapper = shallow(<Event />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".eventDescription")).toHaveLength(1);
  });

  test("render text content of eventDescription correctly after simulate click", () => {
    const event = mockData[0];
    const EventWrapper = shallow(<Event description={event.description} />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".eventDescription").text()).toEqual(
      event.description
    );
  });

  test("render element with btn-hideDetails className after simulate click", () => {
    const EventWrapper = shallow(<Event />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".btn-hideDetails")).toHaveLength(1);
  });

  test("render text content of btn-hideDetails correctly after simulate click", () => {
    const EventWrapper = shallow(<Event />);
    EventWrapper.find(".btn-showDetails").simulate("click");
    expect(EventWrapper.find(".btn-hideDetails").text()).toEqual(
      "hide details"
    );
  });
});
