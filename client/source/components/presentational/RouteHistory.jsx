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
    this.handleUpsert = this.handleUpsert.bind(this);
  }

  addRoute() {
    const { routes } = this.state;
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
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
    axios.delete('/api/routes', { params: route })
      .then(res => console.log('delete successful', res))
      .then(() => axios.get('/api/routes'))
      .then(() => console.log('routes received and will update state'))
      .then(routes => this.setState({ routes }))
      .catch((error) => {
        if (error.response) {
          let stateRoutes = this.state.routes;
          stateRoutes.shift();
          console.log('state routes shifted');
          this.setState({
            routes: stateRoutes,
          });
        } else {
          console.log(error);
        }
      })
    // send request to server
    // upon response, delete from state
  }

  handleUpsert(route) {
    axios.patch('/api/routes', { data: route })
      .then(() => console.log('upsert successful'))
      .then(() => axios.get('/api/routes'))
      .then(() => console.log('routes received and will update state'))
      .then(routes => this.setState({ routes }));
    // send request to server
    // upon response, update to state
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
              handleUpsert={this.handleUpsert}
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
