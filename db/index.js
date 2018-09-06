const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${DB_URL}`);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING
  }
});

var createUser = (username) => {
  return User.sync({alter: true}).then(() => {
  return User.create({
    'username': username});
  });
}




exports.createUser = createUser