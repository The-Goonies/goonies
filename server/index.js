const express = require('express');
const app = express();
const db = require('./../db/index.js')
const bodyparser = require('body-parser');
require('dotenv').config();
// const path = require('path')
let port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyparser.json());
// app.use(bodyParser.urlencoded({ extended: false }))

app.get('/users', (req, res) => (res.send('hello!')))

app.post('/users', (req, res) => {
  db.createUser(req.query.username)
  .then(() => console.log('ya done good'))
  .catch(err => console.log('error report:', err))
})

app.listen(port, () => console.log(`the goonies are listening on ${port}`));
