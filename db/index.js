const Sequelize = require('sequelize');
require('dotenv').config();
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

const sequelize = new Sequelize(`${process.env.DB_URL}`);

const User = sequelize.define('user', {
  username: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  experience: { type: Sequelize.STRING },
});

const createUser = function ({ username, password, experience }) {
  // hash password
  return bcrypt.hash(password, salt)
    .then((hash) => {
      // add new user
      User.sync({ alter: false })
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

const isUsernameUnique = function ({ username, password, experience }) {
  // check for username in database
  return User.find({ where: { username } })
    .then((data) => {
      if (data === null) {
        // if username is unique, create new user
        return createUser({ username, password, experience });
      }
      throw new Error('Username Taken');
    });
};

const verifyUser = function ({ username, password }) {
  // check for username and get saved password hash
  return User.findOne({ where: { username } })
    .then((data) => {
      // compare input password to saved password
      return bcrypt.compare(password, data.password)
        .then((res) => {
          if (res) {
            return data;
          }
          throw new Error('Invalid Password');
        });
    })
    .catch((err) => { throw err; });
};

exports.isUsernameUnique = isUsernameUnique;
exports.createUser = createUser;
exports.verifyUser = verifyUser;
