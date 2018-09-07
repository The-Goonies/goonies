const Sequelize = require('sequelize');
require('dotenv').config();

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

const createUser = ({ username, password, experience }, callback) => {
  User.sync({ alter: true })
    .then((data) => {

      User.create({ username, password, experience })
      .then((data) => callback(data))

    })
    .catch((err) => {
      console.log('Could not add user to database.', err)
    })
};

const verifyUser = ({ username, password }, callback) => {
  User.findOne({ where: {username: username, password: password} })
    .then((userData) => callback(userData))
    .catch((err) => console.log('Could not find user in database.', err))
};


exports.createUser = createUser;
exports.verifyUser = verifyUser;
