require('dotenv').config();
const axios = require('axios');

const getCurrentWeather = () => {
  console.log('get current weather api call')
  return axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      id: process.env.WEATHER_USER,
      APPID: process.env.WEATHER_API,
      lat: 37.749669,
      lon: -119.555107,
    },
  })
    .then((response) => {
      console.log('in then response current weather')
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports.getCurrentWeather = getCurrentWeather;
