const Sequelize = require('sequelize');
require('dotenv').config();
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

const sequelize = new Sequelize(`${process.env.DB_URL}`);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => console.error('Unable to connect to the database:', err));

const User = sequelize.define('user', {
  username: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  experience: { type: Sequelize.STRING },
});

const Routes = sequelize.define('route', {
  routeName: { type: Sequelize.STRING },
  date: { type: Sequelize.STRING },
  distanceInMiles: { type: Sequelize.INTEGER },
  timeToCompleteInHours: { type: Sequelize.INTEGER },
  averageSpeedMPH: { type: Sequelize.INTEGER },
});

User.hasMany(Routes);
Routes.belongsTo(User);
sequelize.sync();

const createUser = function ({ username, password, experience }) {
  // hash password
  return bcrypt.hash(password, salt)
    .then((hash) => {
      // add new user
      User.sync({ alter: false })
        .then(() => User.create({
          username,
          password: hash,
          experience,
        }))
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
  // compare input password to saved password
    .then(data => bcrypt.compare(password, data.password)
      .then((res) => {
        if (res) {
          return data;
        }
        throw new Error('Invalid Password');
      }))
    .catch((err) => { throw err; });
};

const updatePassword = function ({ username, newPassword }) {
  return bcrypt.hash(newPassword, salt)
    .then((hash) => {
      User.update(
        { password: hash },
        { returning: true, where: { username } },
      )
        .then((data) => {
          if (data[0]) {
            return data;
          }
          throw new Error('Cannot update password');
        });
    })
    .catch((err) => { throw err; });
};

const updateUsername = function (usernames) {
  const { username, newUsername } = usernames;
  return User.find({ where: { username: newUsername } })
    .then((data) => {
      if (data === null) {
        return User.update(
          { username: newUsername },
          { returning: true, where: { username } },
        );
      }
      throw new Error('Username Taken');
    });
};

const updateExperience = function (experienceOfUser) {
  const { username, experience } = experienceOfUser;
  return User.update(
    { experience },
    { returning: true, where: { username } },
  )
    .then((data) => {
      if (data[0]) {
        return 'Experience Updated';
      }
      throw new Error('Username Not Found');
    });
};

const getRoutes = () => Routes.findAll();

const createRoute = (route) => {
  const {
    id,
    routeName,
    date,
    distanceInMiles,
    timeToCompleteInHours,
    averageSpeedMPH,
  } = route;
  return Routes.upsert({
    id,
    routeName,
    date,
    distanceInMiles,
    timeToCompleteInHours,
    averageSpeedMPH,
  });
};

const deleteRoute = route => Routes.destroy({
  where: {
    id: route.id,
  },
});

exports.getRoutes = getRoutes;
exports.deleteRoute = deleteRoute;
exports.isUsernameUnique = isUsernameUnique;
exports.createUser = createUser;
exports.verifyUser = verifyUser;
exports.updatePassword = updatePassword;
exports.createRoute = createRoute;
exports.updateUsername = updateUsername;
exports.updateExperience = updateExperience;
