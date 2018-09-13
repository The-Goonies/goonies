const express = require('express');

const app = express();
const bodyparser = require('body-parser');
const db = require('./../db/index.js');
require('dotenv').config();
const weather = require('./weatherApiCall.js');
// const path = require('path')

const port = process.env.PORT || 5000;

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyparser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/users/create', (req, res) => {
  // pass username, password, and experience level
  // from front-end signup to DB
  db.isUsernameUnique(req.body)
    .then(() => {
      console.log('Created new user.');
      res.end();
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

app.get('/api/routes', (req, res) => {
  console.log('/routes get request received', req, res);

app.get('/api/weathercurrent', (req, res) => {
  return weather.getCurrentWeather()
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

app.get('*', (req, res) => {
  res.redirect('/');
});

app.delete('/api/routes', (req, res) => {
  console.log('hello', req, res);
});

app.patch('/api/routes', (req, res) => {
  // TODO: Link to user, and send data back to client
  db.createRoute(req.body.data)
    .then((created) => {
      if (created) {
        res.status(200);
        console.log('Successfully stored');
        res.send('Successfully stored');
      } else {
        res.status(200);
        console.log('Successfully inserted');
        res.send('Successfully inserted');
      }
    });
});

app.listen(port, () => console.log(`The Goonies are listening on ${port}`));