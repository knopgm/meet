# meet-App

->>> Is a serverless progressive application with React that uses a test-driven development (TDD) technique. To fetch upcoming events, the Google Calendar API will be used.
->>> The app will provide a visually appealing events chart where the users can organize their events, filter and share their chart with friends, colleagues or employees.
->>> The events could be seen even without an internet connection on any device of the user's choice.

###### :pushpin: FEATURE 1: FILTER EVENTS BY CITY

**_ As a user
I should be able to “filter events by city”
So that I can see the list of events that take place in that city _**

> Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

- Given: user hasn’t searched for any city
- When: the user opens the app
- Then: the user should see a list of all upcoming events

> Scenario 2: User should see a list of suggestions when they search for a city.

- Given: the main page is open
- When: user starts typing in the city textbox
- Then: the user should see a list of cities (suggestions) that match what they’ve typed

> Scenario 3: User can select a city from the suggested list.

- Given: the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
- When: the user selects a city (e.g., “Berlin, Germany”) from the list
- Then: their city should be changed to that city (i.e., “Berlin, Germany”), the list of suggestions should disappear, and the user should receive a list of upcoming events in that city

###### :pushpin: FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

**_ As a user
I should be able to expand/collapse event details
So that I can have a general view of all the events or look into a specific one _**

> Scenario 1: An event element is collapsed by default.

- Given: user has just logged in
- When: the user opens the app
- Then: the user should see a general list of all upcoming events' names, but not their details

> Scenario 2: User can expand an event to see its details.

- Given: user interest in one event
- When: user clicks on the event's Show Details button
- Then: the event should be expanded to display all details for the user

> Scenario 3: User can collapse an event to hide its details.

- Given: user finished their event analysis
- When: user clicks on the back button/ outside of the modal event display
- Then: the event should hide its details again and the main view of all events should be on display

###### :pushpin: FEATURE 3: SPECIFY NUMBER OF EVENTS

**_ As a user
I should be able to specify the number of events that the board will display
So that the board won't be overcrowded and I could easily find useful information _**

> Scenario 1: When user hasn’t specified a number, 32 is the default number.

- Given: user hasn't specified a number of showing events
- When: user is new to the app or doesn't care about the number of displayed information
- Then: the event chart should have a maximum number of 32 events

> Scenario 2: User can change the number of events they want to see.

- Given: user was overwhelmed by the number of displayed events
- When: user sets a number of events to be visible on the chart
- Then: the event chart should display the number of events that the user specified

###### :pushpin: FEATURE 4: USE THE APP WHEN OFFLINE

**_ As a user
I should be able to use my meet app even without internet
So that I still have easy access to all my events and won't forget to save new ones at the moment I needed _**

> Scenario 1: Show cached data when there’s no internet connection.

- Given: user had no connection
- When: the app uses the events saved on the cached data
- Then: the user still has access to all their event information

> Scenario 2: Show error when user changes the settings (city, time range).

- Given: user had travelled abroad
- When: the app isn't in sync with the city time range
- Then: the app will display an alert of the async city time range.

###### :pushpin: FEATURE 5: DATA VISUALIZATION

**_ As a user
I should be able to analyse my events after filtering the city
So that I can focus on planning things related to the location _**

> Scenario 1: Show a chart with the number of upcoming events in each city.

- Given: user was planning a travel
- When: the user filter for a specific city
- Then: the app will display only the events for the specific city
