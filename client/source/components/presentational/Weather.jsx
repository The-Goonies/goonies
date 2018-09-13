import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
	}

	componentDidMount() {
		this.getCurrentWeatherData();
	}

	getCurrentWeatherData() {
		axios.get('/api/weather')
			.then((response) => {
				console.log('responsed finish',response.data);
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
