const express = require('express');

const app = express();
const bodyparser = require('body-parser');
const db = require('./../db/index.js');
require('dotenv').config();

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
  console.log('/routes get request received')
})

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(port, () => console.log(`The Goonies are listening on ${port}`));
