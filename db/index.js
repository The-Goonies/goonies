const Sequelize = require('sequelize');
require('dotenv').config();
var bcrypt = require('bcrypt');
var salt = 11;

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
  experience: { type: Sequelize.STRING }
});

const isUsernameUnique = ({ username, password, experience }) => {
  //check for username in database
  return User.find({where: {username: username}})
    .then((data) => {
      if (data === null) {
        //if username is unique, create new user
        return createUser({ username, password, experience });
      } else {
        throw 'That username is already taken.';
      }
    })
};

const createUser = ({ username, password, experience }) => {
  //hash password
  return bcrypt.hash(password, salt)
    .then((hash) => {
      //add new user
      User.sync({ alter: false })
        .then((data) => {
          return User.create({
            username: username,
            password: hash,
            experience: experience
          })
        })
        .catch((err) => {
          console.log('Could not add user to database.', err)
        })
    });
};

// const verifyUser = ({ username, password }) => {
//   //hash password
//   console.log('PASS:', password);
//   return bcrypt.hash(password, salt)
//     .then((hash) => {
//       console.log('HASH:', hash);
//       //check for username and password combination
//       User.findOne({
//         where: {
//           username: username,
//           password: hash
//         }
//       }).then( data => {
//         console.log('DATAAAA', data);
//         if (data === null) {
//           throw 'Invalid Password';
//         } else {
//           return data.username;
//         }
//       })
//     });
// };

const verifyUser = ({ username, password }) => {
  //check for username and get saved password hash
  return User.findOne({where: {username: username}})
    .then((data) => {
      //compare input password to saved password
      return bcrypt.compare(password, data.password)
        .then((res) => {
          if (res) {
            return data.username;
          } else {
            throw 'Invalid Password';
          }
        })
    })
    .catch((err) => {throw err});
};

exports.isUsernameUnique =isUsernameUnique;
exports.createUser = createUser;
exports.verifyUser = verifyUser;
