import React from 'react';
import axios from 'axios';

class ParkInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			parkName: 'Yosemite National Park',
			alerts: [],
			info: [],
		};
	}

	componentDidMount() {
		this.getAlerts();
		this.getInfo();
	}

	getAlerts() {
		axios.get('/api/park/alerts', alert)
			.then((response) => {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	getInfo() {
		axios.get('/api/park/info', info)
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
				<h1>{this.state.parkName} Info</h1>
				<h3>Alerts</h3>
				<div>No alerts at this time.</div>
				<h3>Park Info</h3>
				<div>All the info about Yosemite</div>
			</div>	
		);
	}
}

export default ParkInfo;
