Feature: Specify number of events

Scenario: When user hasn’t specified a number, thirty two is the default number.
Given user hasn't specified a number of showing events
When user is new to the app or doesn't care about the number of displayed information
Then the event chart should have the default number of  events

Scenario: User can change the number of events they want to see.
Given user was overwhelmed by the number of displayed events
When user sets a number of events to be visible on the chart
Then the event chart should display the number of events that the user specified