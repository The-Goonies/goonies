import React from 'react';
import PropTypes from 'prop-types';
import RouteContainer from './RouteContainer';

class RouteHistory extends React.Component {
  constructor(props) {
    super(props);
    const { routes } = this.props;

    this.state = {
      routes,
    };

    this.addRoute = this.addRoute.bind(this);
  }

  addRoute() {
    const emptyRoute = {
      routeName: '',
      date: new Date(),
      distanceInMiles: 0,
      timeToCompleteInHours: 0,
      averageSpeedMPH: 0,
    };
    const { routes } = this.state;
    routes.unshift(emptyRoute);
    this.setState({
      routes,
    });
  }

  render() {
    const avgSpeed = 'placeholder';
    const { routes } = this.state;
    return (
      <div className="routeHistory">
        <div className="routesHeader">
          <h1>My Route History</h1>
          <p>
            Average Speed:
            {avgSpeed}
            {' '}
            MPH
          </p>
        </div>
        <button className="addRouteButton" type="button" onClick={this.addRoute}>Add New Route</button>
        <div className="routesContainer">
          { routes.map(route => <RouteContainer key={Math.random()} route={route} />) }
        </div>
      </div>
    );
  }
}

RouteHistory.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RouteHistory;
