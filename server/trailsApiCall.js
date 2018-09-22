require('dotenv').config();
const axios = require('axios');

const getNearestTrails = function () {
  return axios.get('https://www.hikingproject.com/data/get-trails?', {
    params: {
      key: process.env.HIKING_PROJECT_KEY,
      lat: 37.7385,
      lon: -119.5748,
      maxDistance: 10,
      maxResults: 10,
      minStars: 4,
    },
  })
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
    });
};

module.exports.getNearestTrails = getNearestTrails;
