<<<<<<< eaf6bfc0d72541e20c22c0234e9de4575d67647a

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

## Notes ##

The package.json file includes an elsint script which lists out the documents to be checked by the linter. YOU MUST ENTER any new files into this script for them to be checked.
