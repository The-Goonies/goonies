const Sequelize = require('sequelize');
require('dotenv').config();
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

const salt = 11;
const sequelize = new Sequelize(`${process.env.DB_URL}`);

const User = sequelize.define('user', {
  username: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  experience: { type: Sequelize.STRING },
});

const createUser = ({ username, password, experience }) => {
<<<<<<< HEAD
  //  hash password
  return bcrypt.hash(password, salt)
    .then((hash) => {
      //  add new user
      return User.sync({ alter: false })
=======
  // hash password
  return bcrypt.hash(password, salt)
    .then((hash) => {
      // add new user
      User.sync({ alter: false })
>>>>>>> add toggle for menu button, fix some eslint syntax
        .then(() => {
          return User.create({
            username,
            password: hash,
            experience,
          });
        })
        .catch((err) => {
          console.log('Could not add user to database.', err);
        });
    });
};

const isUsernameUnique = ({ username, password, experience }) => {
<<<<<<< HEAD
  //  check for username in database
  return User.find({ where: { username } })
    .then((data) => {
      if (data === null) {
        //  if username is unique, create new user
=======
  // check for username in database
  return User.find({ where: { username } })
    .then((data) => {
      if (data === null) {
        // if username is unique, create new user
>>>>>>> add toggle for menu button, fix some eslint syntax
        return createUser({ username, password, experience });
      }
      throw new Error('Username Taken');
    });
};


const verifyUser = ({ username, password }) => {
<<<<<<< HEAD
  //  check for username and get saved password hash
  return User.findOne({ where: { username } })
    .then((data) => {
      //  compare input password to saved password
      return bcrypt.compare(password, data.password)
        .then((res) => {
          if (res) {
            return data.username;
=======
  // check for username and get saved password hash
  return User.findOne({ where: { username } })
    .then((data) => {
      // compare input password to saved password
      return bcrypt.compare(password, data.password)
        .then((res) => {
          if (res) {
            return data;
>>>>>>> add toggle for menu button, fix some eslint syntax
          }
          throw new Error('Invalid Password');
        });
    })
<<<<<<< HEAD
    .catch((err) => {
      throw err;
    });
=======
    .catch((err) => { throw err; });
>>>>>>> add toggle for menu button, fix some eslint syntax
};

exports.isUsernameUnique = isUsernameUnique;
exports.createUser = createUser;
exports.verifyUser = verifyUser;
