const express = require('express');
const axios = require('axios');
const bodyparser = require('body-parser');
const db = require('./../db/index.js');

const app = express();
require('dotenv').config();
const weather = require('./weatherApiCall.js');
// const path = require('path')

const port = process.env.PORT || 5000;

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyparser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// ///// USERS ///// //

app.post('/api/users/create', (req, res) => {
  // pass username, password, and experience level
  // from front-end signup to DB
  db.isUsernameUnique(req.body)
    .then((data) => {
      console.log('Created new user.');
      res.send(data);
    })
    .catch((err) => {
      if (err.message === 'Username Taken') {
        res.send('Username Taken');
      } else {
        console.log(err);
      }
    });
});

app.get('/api/users/login', (req, res) => {
  // pass username and password to database to verify user
  db.verifyUser(req.query)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      if (err.message === 'Invalid Password') {
        res.send('Invalid Password');
      } else {
        console.log(err);
      }
    });
});

app.put('/api/users/password/:username/:newPassword', (req, res) => {
  db.updatePassword(req.params)
    .then(() => {
      res.send('password updated');
    })
    .catch((err) => {
      res.send(err.message);
    });
});

app.put('/api/users/update/:username/:newUsername', (req, res) => {
  db.updateUsername(req.params)
    .then((data) => {
      if (data[0]) {
        res.send('Username Updated');
      }
    })
    .catch((err) => {
      res.send(err.message);
    });
});

app.put('/api/users/update/exp/:username/:experience', (req, res) => {
  db.updateExperience(req.params)
    .then((data) => {
      if (data) {
        res.send('Experience Updated');
      }
    })
    .catch((err) => {
      res.send(err.message);
    });
});

/** *********** ROUTES ************** */

app.get('/api/routes', (req, res) => {
  const { username } = req.query;
  db.getRoutes(username)
    .then(routes => res.status(200).send(routes))
    .catch(err => console.log(err));
});

app.patch('/api/routes', (req, res) => {
  const { route, username } = req.body.data;
  db.createRoute(route, username)
    .then((created) => {
      if (created) {
        res.status(200);
        // console.log('Successfully stored');
        res.send('Successfully stored');
      } else {
        res.status(200);
        // console.log('Successfully inserted');
        res.send('Successfully inserted');
      }
    });
});

app.delete('/api/routes', (req, res) => {
  db.deleteRoute(req.query)
    .then((rowsDestroyed) => {
      if (rowsDestroyed === 1) {
        res.status(204);
        console.log('Successfully stored');
        res.send('Successfully deleted');
      } else if (rowsDestroyed === 0) {
        res.status(404);
        res.send('That record was not found');
      }
    })
    .catch(err => console.log(err));
});

// ///// WEATHER ///// //
app.get('/api/weathercurrent', (req, res) => {
  weather.getCurrentWeather()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(err, 'Error getting weather data');
    });
});

app.get('/api/weatherfive', (req, res) => {
  weather.getFiveDayWeather()
    .then((data) => {
      res.send(data.list);
    })
    .catch((err) => {
      res.status(err, 'Error getting weather data');
    });
});


// ///// PARK INFO ///// //

app.get('/api/park/alerts', (req, res) => {
  // hard coded for yosemite alerts (parkCode=yose)
  axios.get(`https://api.nps.gov/api/v1/alerts?parkCode=yose%2C&stateCode=ca&limit=10&api_key=${process.env.PARK_API}`)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/api/park/info', (req, res) => {
  // hard coded for yosemite park info (parkCode=yose)
  axios.get(`https://api.nps.gov/api/v1/parks?parkCode=yose&stateCode=ca&api_key=${process.env.PARK_API}`)
    .then((data) => {
      res.send(data.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
});


// Redirects to login page when page refreshes
app.get('*', (req, res) => {
  res.redirect('/');
});


app.listen(port, () => console.log(`The Goonies are listening on ${port}`));
