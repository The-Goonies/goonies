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

const createUser = ({ username, password, experience }) => {
  //  hash password
  return bcrypt.hash(password, salt)
    .then((hash) => {
      //  add new user
      return User.sync({ alter: false })
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
  //  check for username in database
  return User.find({ where: { username } })
    .then((data) => {
      if (data === null) {
        //  if username is unique, create new user
        return createUser({ username, password, experience });
      }
      throw new Error('Username Taken');
    });
};


const verifyUser = ({ username, password }) => {
  //  check for username and get saved password hash
  return User.findOne({ where: { username } })
    .then((data) => {
      //  compare input password to saved password
      return bcrypt.compare(password, data.password)
        .then((res) => {
          if (res) {
            return data.username;
          }
          throw new Error('Invalid Password');
        });
    })
    .catch((err) => {
      throw err;
    });
};

exports.isUsernameUnique = isUsernameUnique;
exports.createUser = createUser;
exports.verifyUser = verifyUser;
