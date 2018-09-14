require('dotenv').config();
const axios = require('axios');

const getCurrentWeather = function () {
  return axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      id: process.env.WEATHER_USER,
      APPID: process.env.WEATHER_API,
      lat: 37.749669,
      lon: -119.555107,
      units: 'imperial',
    },
  })
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
    });
};

const getFiveDayWeather = function () {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast', {
    params: {
      id: process.env.WEATHER_USER,
      APPID: process.env.WEATHER_API,
      lat: 37.749669,
      lon: -119.555107,
      units: 'imperial',
    },
  })
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
    });
};
module.exports.getCurrentWeather = getCurrentWeather;
module.exports.getFiveDayWeather = getFiveDayWeather;
