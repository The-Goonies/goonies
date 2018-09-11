import React from 'react';

class Route extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      routeName: this.props.route.routeName,
      date: this.props.route.date.toString(),
      distanceInMiles: this.props.route.distanceInMiles,
      timeToCompleteInHours: this.props.route.timeToCompleteInHours,
      averageSpeedMPH: this.props.route.averageSpeedMPH,
    };
  }

  render() {
    const divStyle = {
      border: '1px solid black',
      margin: '20px',
      padding: '50px',
    };
    return (
      <div className="route" style={divStyle}>
        <div />
        <div>
Name:
          {this.state.routeName}
        </div>
        <div>
Date:
          {this.state.date}
        </div>
        <div>
Distance:
          {this.state.distanceInMiles}
        </div>
        <div>
Duration:
          {this.state.timeToCompleteInHours}
        </div>
        <div>
Average Speed:
          {this.state.averageSpeedMPH}
        </div>
      </div>
    );
  }
}
export default Route;
