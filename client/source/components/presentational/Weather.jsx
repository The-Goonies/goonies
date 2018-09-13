import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: '',
      currentClouds: '',
      currentHumidity: '',
      currentWind: '',
      currentLocation: '',
      // fiveDayForecast: [],
    };
  }

  componentDidMount() {
    this.getCurrentWeatherData();
    this.getFiveDayForcast();
  }

  getCurrentWeatherData() {
    axios.get('/api/weathercurrent')
      .then((response) => {
        console.log('responsed Current', response.data);
        this.setState({
          currentTemp: response.data.main.temp,
          currentClouds: response.data.clouds.all,
          currentHumidity: response.data.main.humidity,
          currentWind: response.data.wind.speed,
          currentLocation: response.data.name,
          // fiveDayForecast: [],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // HAS 8 FORCATS PER DAY EVERY 3 HOURS

  getFiveDayForcast() {
    axios.get('/api/weatherfive')
      .then((response) => {
        console.log('responded with 5 day', response.data);
        this.setState({
          // fiveDayForecast: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      currentTemp,
      currentClouds,
      currentHumidity,
      currentWind,
      currentLocation,
    } = this.state;
    return (
      <div>
        <div>
          <h2>currentWeather</h2>
          <h4>{currentLocation}</h4>
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

        <h2>5-Day Forcast</h2>
      </div>
    );
  }
}

export default Weather;
