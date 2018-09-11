const Sequelize = require('sequelize');
require('dotenv').config();
const bcrypt = require('bcrypt');

const salt = 11;
const sequelize = new Sequelize(`${process.env.DB_URL}`);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('user', {
  username: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  experience: { type: Sequelize.STRING },
});

const isUsernameUnique = ({ username, password, experience }) => User.find({ where: { username } })
  .then((data) => {
    if (data === null) {
      // if username is unique, create new user
      return createUser({ username, password, experience });
    }
    throw 'That username is already taken.';
  });
const createUser = ({ username, password, experience }) => bcrypt.hash(password, salt)
  .then((hash) => {
    // add new user
    User.sync({ alter: false })
      .then(data => User.create({
        username,
        password: hash,
        experience,
      }))
      .catch((err) => {
        console.log('Could not add user to database.', err);
      });
  });
const verifyUser = ({ username, password }) => User.findOne({ where: { username } })
  .then(data => bcrypt.compare(password, data.password)
    .then((res) => {
      if (res) {
        return data.username;
      }
      throw 'Invalid Password';
    }))
  .catch((err) => { throw err; });
exports.isUsernameUnique = isUsernameUnique;
exports.createUser = createUser;
exports.verifyUser = verifyUser;
