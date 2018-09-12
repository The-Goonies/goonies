import React from 'react';
<<<<<<< HEAD
import GoogleMapsContainer from '../container/renderMap';
=======
import ReactDom from 'react-dom';
import GoogleMapsContainer from '../presentational/renderMap.jsx';
>>>>>>> fix render Map, start implementing menu

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
<<<<<<< HEAD
      </div>
      <div style={divStyle}>
        {' '}
        --Map information will go here --
=======
>>>>>>> fix render Map, start implementing menu
      </div>
    </div>
  );
};

export default MapYourRoute;
