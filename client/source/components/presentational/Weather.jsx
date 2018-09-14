import React from 'react';
import axios from 'axios';
import ForecastForm from './ForecastForm';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: '',
      currentClouds: '',
      currentHumidity: '',
      currentWind: '',
      currentLocation: '',
      currentWeather: '',
      fiveDayForecast: [],
    };
  }

  componentDidMount() {
    this.getCurrentWeatherData();
    this.getFiveDayForcast();
  }

  getCurrentWeatherData() {
    axios.get('/api/weathercurrent')
      .then((response) => {
        this.setState({
          currentTemp: Math.round(response.data.main.temp),
          currentClouds: response.data.clouds.all,
          currentHumidity: response.data.main.humidity,
          currentWind: response.data.wind.speed,
          currentLocation: response.data.name,
          currentWeather: response.data.weather[0].description,
        });
      })
      .catch((error) => {
        console.log(error);
<<<<<<< HEAD
        alert(error, 'Could not get weather data');
=======
        alert(error, 'Unable to get weather data');
>>>>>>> 98ba4dac79af308734e415003d839ef9b833c61f
      });
  }
  // HAS 8 FORECAST PER DAY

  getFiveDayForcast() {
    axios.get('/api/weatherfive')
      .then((response) => {
        this.setState({
          fiveDayForecast: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
<<<<<<< HEAD
        alert(error, 'Could not get weather data');
=======
        alert(error, 'Unable to get weather data');
>>>>>>> 98ba4dac79af308734e415003d839ef9b833c61f
      });
  }

  render() {
    const {
      currentTemp,
      currentClouds,
      currentHumidity,
      currentWind,
      currentLocation,
      currentWeather,
      fiveDayForecast,
    } = this.state;
    return (
      <div>
        <div>
          <h2>Current Weather</h2>
          <h4>{currentLocation}</h4>
          <h3>{currentWeather}</h3>
          <p>
            Temp:
            {' '}
            {currentTemp}
            {' '}
            F°
          </p>
          <p>
            Clouds:
            {' '}
            {currentClouds}
            %
          </p>
          <p>
            Humidity:
            {' '}
            {currentHumidity}
            %
          </p>
          <p>
            Wind:
            {' '}
            {currentWind}
            {' '}
            mph
          </p>
        </div>
        <div>
          <ForecastForm fiveday={fiveDayForecast} />
        </div>
      </div>
    );
  }
}

export default Weather;
