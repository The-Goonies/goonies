import React from 'react';
import ReactDom from 'react-dom';
import GoogleMapsContainer from '../presentational/renderMap.jsx';

class MapYourRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const divStyle = {
      border: '1px solid black',
      margin: '20px',
      padding: '50px',
    };
    return (
      <div>
        <GoogleMapsContainer />
      </div>
    );
  }
}

export default MapYourRoute;
