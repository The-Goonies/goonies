import React from 'react';
import Route from './Route.jsx';

const RouteHistory = (props) => {
  const avgSpeed = 'placeholder';

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
        { props.routes.map(route => <Route route={route} />) }
      </div>
    </div>
  );
};

export default RouteHistory;
