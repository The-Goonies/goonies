import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import RouteContainer from './RouteContainer';

class RouteHistory extends React.Component {
  constructor({ props, routes }) {
    super(props);

    this.state = {
      routes,
    };

    this.addRoute = this.addRoute.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // I would really like to keep this work
  addRoute() {
    const { routes } = this.state;
    /* eslint no-underscore-dangle: ["error", { "allow": ["foo_", "_bar"] }] */
    const maxId = routes.reduce((acc, route) => Math.max(acc, route._id), 0);
    const emptyRoute = {
      _id: maxId + 1,
      routeName: 'trigger update',
      date: '',
      distanceInMiles: 0,
      timeToCompleteInHours: 0,
      averageSpeedMPH: 0,
    };
    routes.unshift(emptyRoute);
    this.setState({
      routes,
    });
  }

  handleDelete(route) {
    console.log('gonna send to server with this route', route);
    axios.delete('/api/routes', {params: route.id})
      .then(() => console.log('delete successful'))
      .then(() => axios.get('/api/routes'))
      .then(() => console.log('routes received and will update state'))
      .then(routes => this.setState({ routes }));
    // send request to server
    // upon response, delete from state
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
          { routes.map(route => (
            <RouteContainer
              key={Math.random()}
              route={route}
              handleDelete={this.handleDelete}
            />)) }
        </div>
      </div>
    );
  }
}

RouteHistory.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RouteHistory;
