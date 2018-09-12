import React from 'react';

class Route extends React.Component {
  constructor({ props, route }) {
    super(props);

    const {
      routeName,
      date,
      distanceInMiles,
      timeToCompleteInHours,
      averageSpeedMPH,
    } = route;

    this.state = {
      routeName,
      date: date.toString(),
      distanceInMiles,
      timeToCompleteInHours,
      averageSpeedMPH,
    };
  }

  render() {
    const divStyle = {
      border: '1px solid black',
      margin: '20px',
      padding: '50px',
    };
    const {
      routeName,
      date,
      distanceInMiles,
      timeToCompleteInHours,
      averageSpeedMPH,
    } = this.state;
    return (
      <div className="route" style={divStyle}>
        <div />
        <div>
          Name:
          {routeName}
        </div>
        <div>
          Date:
          {date}
        </div>
        <div>
          Distance:
          {distanceInMiles}
        </div>
        <div>
          Duration:
          {timeToCompleteInHours}
        </div>
        <div>
          Average Speed:
          {averageSpeedMPH}
        </div>
      </div>
    );
  }
}
export default Route;
