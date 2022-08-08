import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, thirty two is the default number.", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("user hasn't specified a number of showing events", () => {});

    when(
      "user is new to the app or doesn't care about the number of displayed information",
      () => {
        AppWrapper = mount(<App />);
      }
    );

    then("the event chart should have the default number of  events", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(6);
    });
  });

  test("User can change the number of events they want to see.", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    given("user was overwhelmed by the number of displayed events", () => {
      AppWrapper = mount(<App />);
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    });

    when("user sets a number of events to be visible on the chart", () => {
      NumberOfEventsWrapper.find(".inputNumber").simulate("change", {
        target: { value: "2" },
      });
    });

    then(
      "the event chart should display the number of events that the user specified",
      () => {
        expect(AppWrapper.find(".event")).toHaveLength(2);
      }
    );
  });
});
