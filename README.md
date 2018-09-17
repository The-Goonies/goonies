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

## Park Info ##
The park info uses the National Park Services API to get safety alerts and park info for Yosemite. 
https://www.nps.gov/subjects/digital/nps-data-api.htm

The API key is stored as PARK_API in a .env file (local) as well as a Config Var on Heroku (deplyed).

Sample data can be found in SampleData.js, additional sample data can be found in the NPS API documentation.

## Sign up and Login ##

## Stopwatch ##

## Route History ##
**Objective:** The route history offers users an opportunity to see what routes they have completed, along with date, distance, duration, and average speed of completion. Over time, this log can be a source of pride for users and help in further planning by understanding average speed across various hikes.

**Understanding the tech:** The Route History is divided into a few components. The RouteHistory.jsx file (1) shows the users overall average speed (not yet functional as of 9/17/2018), (2) contains a button to add a new route, and (3) iterates across all routes contained in the Postgres database under the current username in state and renders a RouteContainer for each, passing along . The RouteContainer is a simple div that renders either a RouteForm (the user can update) or a static Route component containing the route information.


**Tips:** The flow of props and state is structured such that communication with the database only happens if a user saves a route. Only changes to cient-side state happen if a user creates a new route and then deletes before saving. All communication with the server happens via the /api/routes endpoint.

**Vision for more features:** A few feature can quickly improve the usability of the Route History application, including form input validation, the use of the placeholder/pre-populated form data, linking to the stopwatch (possibly using Redux to share state or making the stopwatch a child component of RouteHistory), and formatting information (e.g., showings hours and minutes in duration).

## Weather ##