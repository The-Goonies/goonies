import React from 'react';
import axios from 'axios';
import Weather from './Weather';


class ParkInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkName: '',
      alerts: [],
      info: {},
    };
  }

  componentDidMount() {
    this.getAlerts();
    this.getInfo();
  }

  getAlerts() {
    axios.get('/api/park/alerts')
      .then((response) => {
        this.setState({ alerts: response.data.data }, () => this.render());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getInfo() {
    axios.get('/api/park/info')
      .then((response) => {
        this.setState({
          info: response.data.data[0],
          parkName: response.data.data[0].name,
        }, () => this.render());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { parkName } = this.state;
    const { alerts } = this.state;
    const { info } = this.state;
    return (
      <div>
        <h2>
          { parkName }
          <span> </span>
          {info.designation}
        </h2>
        <h3>Alerts</h3>
        {alerts.map((alert) => {
          return (
            <div key={alert.id}>
              <p>
                <strong>{alert.title}</strong>
                <br />
                <span>Category: </span>
                {alert.category}
                <br />
                {alert.description}
              </p>
            </div>
          );
        })}
        <h3>Park Info</h3>
        <div>
          <p>
            {info.description}
            <br />
            <a href={info.url}>Learn More</a>
          </p>
          <p>
            <strong>Directions</strong>
            <br />
            {info.directionsInfo}
            <br />
            <a href={info.directionsUrl}>Driving Directions</a>
          </p>
        </div>
      </div>
    );
  }
}

export default ParkInfo;
