import React from 'react';
import PropTypes from 'prop-types';
import Route from './Route';

const RouteHistory = ({ routes }) => {
  const avgSpeed = 'placeholder';
  // const { routes } = props.routes;

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
      <button className="addRouteButton" type="button">Add New Route</button>
      <div className="routesContainer">
        { routes.map(route => <Route key={Math.random()} route={route} />) }
      </div>
    </div>
  );
};

RouteHistory.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RouteHistory;
