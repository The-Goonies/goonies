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
  username: {
    type: Sequelize.STRING,
  },
});

const createUser = username => User.sync({ alter: true }).then(() => User.create({ username }));


exports.createUser = createUser;
