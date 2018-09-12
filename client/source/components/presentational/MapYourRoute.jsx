import React from 'react';
import GoogleMapsContainer from '../container/renderMap';

const MapYourRoute = () => {
  const divStyle = {
    border: '1px solid black',
    margin: '20px',
    padding: '50px',
  };
  return (
    <div>
      <div>
        <GoogleMapsContainer />
      </div>
      <div style={divStyle}>
        {' '}
        --Map information will go here --
      </div>
    </div>
  );
};

export default MapYourRoute;
