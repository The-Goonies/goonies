import React from 'react';
import axios from 'axios';
import Weather from './Weather';


class ParkInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkName: 'Yosemite National Park',
      alerts: [],
      info: [],
    };
  }

  // componentDidMount() {
  //   this.getAlerts();
  //   this.getInfo();
  // }

  // getAlerts() {
  //   axios.get('/api/park/alerts', alert)
  //     .then((response) => {
  //       this.setstate({ alerts: response.alert });
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // getInfo() {
  //   axios.get('/api/park/alerts', alert)
  //     .then((response) => {
  //       this.setstate({ info: response.info });
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    const { parkName } = this.state;
    const { alerts } = this.state;
    const { info } = this.state;
    return (
      <div>
        <h2>{ parkName }</h2>
        <h3>Weather</h3>
        <Weather />
        <h3>Alerts</h3>
        <div>{ alerts }</div>
        <h3>Park Info</h3>
        <div>{ info }</div>
      </div>
    );
  }
}

export default ParkInfo;
