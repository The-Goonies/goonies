import React from 'react';
// import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentWeather: {},
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
          // currentWeather: response.data,
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
    return (
      <div>
        <div>current weather</div>
        <div>5-Day Forcast</div>
      </div>
    );
  }
}

export default Weather;
