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

  // TODO: get routes sorted by date, or do we want as is by most recently created?

  componentDidMount() {
    axios.get('/api/routes')
      .then((newRoutes) => {
        this.setState({
          routes: newRoutes.data,
        });
      });
  }


  addRoute() {
    const { routes } = this.state;
    const emptyRoute = {
      tempId: Math.random(),
      id: null,
      routeName: '',
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

  handleDelete(targetRoute) {
    console.log('targetRoute is', targetRoute);
    /* if targetRoute has tempId, it has not yet been saved to the database
    and we can delete locally without communicating to the database */
    if (!targetRoute.id) {
      const { routes } = this.state;
      let targetIndex;
      for (let i = 0; i < routes.length; i += 1) {
        if (routes[i].tempId === targetRoute.tempId) {
          targetIndex = i;
        }
      }
      routes.splice(targetIndex, 1);
      this.setState({
        routes,
      });
      /* otherwise deletion requires communicating with the database */
    } else {
      axios.delete('/api/routes', { params: targetRoute })
        .then(res => console.log('delete successful', res))
        .then(() => axios.get('/api/routes'))
        .then(routes => this.setState({ routes: routes.data }))
        .catch(error => console.log(error));
    }
  }

  handleUpsert(route) {
  // TODO: is upsert adding extra items to database?
    axios.patch('/api/routes', { data: route })
      .then(() => console.log('upsert successful'))
      .then(() => axios.get('/api/routes'))
      .then(routes => this.setState({ routes: routes.data }));
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
