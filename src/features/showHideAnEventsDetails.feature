Feature: Show Hide an events details

Scenario: An event element is collapsed by default.
Given user has just logged in
When the user opens the app
Then the user should see a general list of all upcoming events' names, but not their details

Scenario: User can expand an event to see its details.
Given the user opens the app
And user interest in one event
When user clicks on the event's Show Details button
Then the event should be expanded to display all details for the user

Scenario: User can collapse an event to hide its details.
Given user finished their event analysis
When user clicks on the hide details button of the modal event display
Then the event should hide its details again and the main view of all events should be on display