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
We used Google Maps API to render our map component, it's current location is zoomed to Yosemite National Park. A few notes on working with Google Maps:
1) Google now requires a credit card on file to work with their api (note you won't be charged unless your app goes viral (50K+ views a day), but you should be extra cautious about keeping the api key safe): https://cloud.google.com/maps-platform/

2) We had issues getting our maps api key to work with a .env file so we used a local myapikey.js file. The current file has an empty string as the key, this is why the map shows developer edition. Just add your own api key and save the file to unlock the full map. Another options is to just add the api key to your heroku deployment.

3) We used a react library to help make the Google Maps API easier to work with in react. The library we chose is called Google-Maps-React. Documentation: https://github.com/fullstackreact/google-maps-react
Note there are alternative libraries you may wish to use instead such as react-google-maps. 

4) If you are eager to dive into adding map features, check out the different add-ons Google offers such as the Drawing Manger or Directions API:https://developers.google.com/maps/documentation/javascript/drawinglayer
Please note, we encountered a steeper learning curve than expected working with Google Maps API. 

## Park Info ##

## Sign up and Login ##

## Stopwatch ##
The main goal for the stopwatch is to provide the user with a way to easily calculate their current pace (in Miles Per Hour) and get a time projection on finishing their current hike in total hours. The user starts a timer, inputs their distance travelled so far (in miles) and the total distance of the hike planned (e.g., 10 miles total). Here is an example for the average speed: (e.g., they travel 0.10 of a mile with a time of 2:00 mins). Forumla: Average Speed = Distance / Time. 0.10 miles / 2 minutes = 3 miles per hour. 

To find the projected time we use the following formula: Projected time = Total Distance / Rate. 10 miles / 3 MPH = a projected arrival time of 3 hours (if the current pace is kept).

Check your calculations here if desired: https://www.calculatorsoup.com/calculators/math/speed-distance-time-calculator.php

Future feature ideas might include automatically grabbing the current GPS location of the user prediodically and taking snapshots as they hike along a trail. Send this data to sync with their route history profile.

## Route History ##
Objective:
Description:
Tips:
Vision for more features?

## Weather ##