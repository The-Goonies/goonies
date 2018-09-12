import React from 'react';
import PropTypes from 'prop-types';

const Route = ({ route, handleEdit }) => {
  const divStyle = {
    border: '1px solid black',
    margin: '20px',
    padding: '50px',
  };
  const {
    routeName,
    distanceInMiles,
    timeToCompleteInHours,
    averageSpeedMPH,
  } = route;
  const date = route.date.toString();

  return (
    <div className="route" style={divStyle}>
      <div />
      <div>
        Name:
        {' ' + routeName + ' '}
        <button type="button" onClick={() => handleEdit()}>edit</button>
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

Route.propTypes = {
  route: PropTypes.shape({
    routeName: PropTypes.string,
    date: PropTypes.string,
    distanceInMiles: PropTypes.number,
    timeToCompleteInHours: PropTypes.number,
    averageSpeedMPH: PropTypes.number,
  }).isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default Route;
