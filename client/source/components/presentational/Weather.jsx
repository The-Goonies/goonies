import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			weatherInfo: [],
		};
	}

	// componentDidMount() {
	// 	getWeatherData();
	// }

	getWeatherData() {
		axios.get('/api/weather', weatherInfo)
			.then((response) => {
				console.log(response);
			})
			.catch(function(error) {
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
