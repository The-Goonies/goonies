const express = require('express');

const app = express();
const bodyparser = require('body-parser');
const db = require('./../db/index.js');
require('dotenv').config();
// const path = require('path')

let port = process.env.PORT || 5000;

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyparser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/users/create', (req, res) => {
  // pass username, password, and experience level
  // from front-end signup to DB
  db.createUser(req.body)
    .then((data) => {
      console.log('Created new user. User data:', data.dataValues);
      res.send(data.dataValues);
    })
    .catch((err) => {
      console.log('Could not create user in server.', err);
    })
});

app.get('/api/users/login', (req, res) => {
  //pass username and password to database to verify user
  db.verifyUser(req.query)
    .then((data) => {
      console.log('User verified. User data:', data.dataValues);
      res.send(data.dataValues);
    })
    .catch((err) => {
        console.log('Could not login user.', err);
    })
});

app.listen(port, () => console.log(`the goonies are listening on ${port}`));
