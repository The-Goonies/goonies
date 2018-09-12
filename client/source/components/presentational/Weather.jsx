import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
