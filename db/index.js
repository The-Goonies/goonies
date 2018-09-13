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
  clientSideId: { type: Sequelize.STRING },
  routeName: { type: Sequelize.STRING },
  date: { type: Sequelize.STRING },
  distanceInMiles: { type: Sequelize.INTEGER },
  timeToCompleteInHours: { type: Sequelize.INTEGER },
  averageSpeedMPH: { type: Sequelize.INTEGER },
});

User.hasMany(Routes);
Routes.belongsTo(User);
// sequelize.sync();

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

const createRoute = (route) => {
  const {
    routeName,
    date,
    distanceInMiles,
    timeToCompleteInHours,
    averageSpeedMPH,
  } = route;
  const clientSideId = route._id;
  return Routes.upsert({
    clientSideId,
    routeName,
    date,
    distanceInMiles,
    timeToCompleteInHours,
    averageSpeedMPH,
  });
};

exports.isUsernameUnique = isUsernameUnique;
exports.createUser = createUser;
exports.verifyUser = verifyUser;
exports.createRoute = createRoute;
