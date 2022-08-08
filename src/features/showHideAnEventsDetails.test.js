import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
import CitySearch from "../CitySearch";
import Event from "../Event";
import { extractLocations, getEvents } from "../api";
import EventList from "../EventList";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppWrapper;
    given("user has just logged in", () => {});

    when("the user opens the app", () => {
      AppWrapper = mount(<App />);
    });

    then(
      "the user should see a general list of all upcoming events' names, but not their details",
      () => {
        AppWrapper.update();
        expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
        expect(AppWrapper.find(".event_Details")).toHaveLength(0);
      }
    );
  });

  test("User can expand an event to see its details.", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;
    let EventWrapper;

    given("the user opens the app", () => {
      AppWrapper = mount(<App />);
    });

    and("user interest in one event", () => {
      AppWrapper.update();
      EventWrapper = AppWrapper.find(Event).at(0);
    });

    when("user clicks on the event's Show Details button", () => {
      EventWrapper.find(".btn-showDetails").simulate("click");
      EventWrapper = AppWrapper.find(Event).at(0);
    });

    then(
      "the event should be expanded to display all details for the user",
      () => {
        expect(EventWrapper.find(".event_Details")).toHaveLength(1);
      }
    );
  });

  test("User can collapse an event to hide its details.", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;
    let EventWrapper;
    given("user finished their event analysis", () => {
      AppWrapper = mount(<App />);
      AppWrapper.update();

      EventWrapper = AppWrapper.find(Event).at(0);
      EventWrapper.find(".event_Details");
    });

    when(
      "user clicks on the hide details button of the modal event display",
      () => {
        EventWrapper.find(".btn-hideDetails").simulate("click");
      }
    );

    then(
      "the event should hide its details again and the main view of all events should be on display",
      () => {
        // expect(EventWrapper.find(".event_Details")).toHaveLength(0);
      }
    );
  });
});
