# Goonies' Backpacker App - What you need to know to use our repo ##

## Over-arching file structure ##

root: contains various setup files, including environmental variables
|_client: front-end code
| |_components
|   |_container: single container element
|  |_presentational: various child components
|_coverage: testing code
|_db: Sequelize interacts with PostgreSQL
|_server: server routing and response_

## Root ##

**dotenv: ** We use dotenv npm module and a '.env' file to store local environmental variables. These appear as process.env[variable name] throughout the code and include:
1) DB_URL: URL to postgres database set up on on ElephantSQL
2) HEROKU_AUTH: token from Heroku that allows Travis CI (see .travis.yml folder to run tests on github commits

To ensure these variables are available in the deployed environment, all necessary environmental variables are passed along to Heroku by entering these variables via the Heroku dashboard online.

**Travis CI** We use Travis CI's to continuously integrate, lint, and deploy our app. (Note: an advanced feature may be to integrate Jest with Travis CI)

**Jest** We use Jest to test our code. As of 9/17/2018, tests were limited to DOM snapshot tests and we had just started to set up comprehensive coverage tests.

Additional resources:
https://www.npmjs.com/package/dotenv
https://goonies-backpacker.herokuapp.com/
https://www.heroku.com
https://travis-ci.org/

## Client/front-end code ##
Webpack + Babel + HTMLPlugin converts JSX and HTML code in the source into ES5 code in the dist folder

Additional resources:
https://www.valentinog.com/blog/react-webpack-babel/
https://webpack.js.org/concepts/

## Server ##
Express with a 'catchall' router setup to direct all users back to our homepage. (Note: one advanced feature may be to allow users/developers to refresh the current page without being re-routed to the home page).

## DB ##
PostgreSQL hosted on an ElephantSQL server (DB_URL is an environmental variable)
https://www.elephantsql.com/

# Functionality at-a-glance #

## Map ##
We used Google Maps API to render our map component, it's current location is zoomed to Yosemite National Park. A few notes on working with Google Maps:
1) Google now requires a credit card on file to work with their api (note you won't be charged unless your app goes viral (50K+ views a day), but you should be extra cautious about keeping the api key safe): https://cloud.google.com/maps-platform/

2) We had issues getting our maps api key to work with a .env file so we used a local myapikey.js file. The current file has an empty string as the key, this is why the map shows developer edition. Just add your own api key and save the file to unlock the full map. Another options is to just add the api key to your heroku deployment.

3) We used a react library to help make the Google Maps API easier to work with in react. The library we chose is called Google-Maps-React. Documentation: https://github.com/fullstackreact/google-maps-react
Note there are alternative libraries you may wish to use instead such as react-google-maps. 

4) If you are eager to dive into adding map features, check out the different add-ons Google offers such as the Drawing Manger or Directions API:https://developers.google.com/maps/documentation/javascript/drawinglayer
Please note, we encountered a steeper learning curve than expected working with Google Maps API. 

## Park Info ##
The park info uses the National Park Services API to get safety alerts and park info for Yosemite. 
https://www.nps.gov/subjects/digital/nps-data-api.htm

The API key is stored as PARK_API in a .env file (local) as well as a Config Var on Heroku (deplyed).

Sample data can be found in SampleData.js, additional sample data can be found in the NPS API documentation.

## Sign up and Login ##
Upon successful signup and login, the user is redirected to map.
For signing up a new user, the user must pick a username that is unique.

## User Profile ##
Allow user to edit profile information, such as username, experience level, and password.
Made up of 3 components: UserProfile, UsernameEdit, ExperienceEdit.

## Stopwatch ##
The main goal for the stopwatch is to provide the user with a way to easily calculate their current pace (in Miles Per Hour) and get a time projection on finishing their current hike in total hours. The user starts a timer, inputs their distance travelled so far (in miles) and the total distance of the hike planned (e.g., 10 miles total). Here is an example for the average speed: (e.g., they travel 0.10 of a mile with a time of 2:00 mins). Forumla: Average Speed = Distance / Time. 0.10 miles / 2 minutes = 3 miles per hour. 

To find the projected time we use the following formula: Projected time = Total Distance / Rate. 10 miles / 3 MPH = a projected arrival time of 3 hours (if the current pace is kept).

Check your calculations here if desired: https://www.calculatorsoup.com/calculators/math/speed-distance-time-calculator.php

Future feature ideas might include automatically grabbing the current GPS location of the user prediodically and taking snapshots as they hike along a trail. Send this data to sync with their route history profile.

## Route History ##
**Objective:** The route history offers users an opportunity to see what routes they have completed, along with date, distance, duration, and average speed of completion. Over time, this log can be a source of pride for users and help in further planning by understanding average speed across various hikes.

**Understanding the tech:** The Route History is divided into a few components. The RouteHistory.jsx file (1) shows the users overall average speed (not yet functional as of 9/17/2018), (2) contains a button to add a new route, and (3) iterates across all routes contained in the Postgres database under the current username in state and renders a RouteContainer for each, passing along . The RouteContainer is a simple div that renders either a RouteForm (the user can update) or a static Route component containing the route information.


**Tips:** The flow of props and state is structured such that communication with the database only happens if a user saves a route. Only changes to cient-side state happen if a user creates a new route and then deletes before saving. All communication with the server happens via the /api/routes endpoint.

**Vision for more features:** A few feature can quickly improve the usability of the Route History application, including form input validation, the use of the placeholder/pre-populated form data, linking to the stopwatch (possibly using Redux to share state or making the stopwatch a child component of RouteHistory), and formatting information (e.g., showings hours and minutes in duration).

## Weather ##
Tips:
  Need to get an free API Key which is free up to a 1000 pulls per day
  Displays the current and forecasted weather using https://openweathermap.org/api 
  Uses 5 day forcast API that returns an array of 40 objects one for every 3 hours
  Currently uses Latitude and Longitude coordinates to get weather data  

Vision for more features:
  Use map or some other way to get current location to get weather data for other places
  Create a better UX with graphics for weather conditions 

Resources: 
  https://openweathermap.org/api


## Jest Testing ##
Tips:
  Currently Jest/enzyme is set up for most components Snapshot testing and Coverage testing,
  There are some errors with the components having a Dom render and undefined values 
  The chart that is generated is showing code coverage and shows which lines are not covered by Jest testing 

Vision for more features:
  Additional features is adding more tests to get full coverage and all components and functions 

Resources:
  https://jestjs.io/docs/en/snapshot-testing#snapshot-testing-with-jest
  https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f
  https://airbnb.io/enzyme/docs/api/
  https://jestjs.io/docs/en/configuration.html