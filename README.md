# Goonies - What you need to know to use our repo ##

## Over-arching file structure ##

root: contains various setup files, including environmental variables
|_client: front-end code
| |_components
|   |_container: single container element
|  |_presentational: various child components
|_db: Sequelize interacts with PostgreSQL
|_server: server routing and response_

## Root: .env  ##

We use dotenv npm module and a '.env' file to store local environmental variables. These appear as process.env[variable name] throughout the code and include:
1) DB_URL: URL to postgres database set up on on ElephantSQL
2) HEROKU_AUTH: token from Heroku that allows Travis CI (see .travis.yml folder to run tests on github commits

To ensure these variables are available in the deployed environment, all necessary environmental variables are passed along to Heroku by entering these variables via the Heroku dashboard online.

Additional resources:
https://www.npmjs.com/package/dotenv

## Client/front-end code ##
Webpack + Babel + HTMLPlugin converts JSX and HTML code in the source into ES5 code in the dist folder

Additional resources:
https://www.valentinog.com/blog/react-webpack-babel/
https://webpack.js.org/concepts/

## Server ##
Express with a 'catchall' router setup to direct all users back to our homepage

## DB ##
PostgreSQL hosted on an ElephantSQL server (DB_URL is an environmental variable)

# Functionality at-a-glance #

## Map ##

## Park Info ##

## Sign up and Login ##

## Stopwatch ##

## Route History ##
Objective:
Description:
Tips:
Vision for more features?

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