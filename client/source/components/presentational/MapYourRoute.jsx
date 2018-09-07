import React from 'react';
import ReactDom from 'react-dom';
import GoogleMapsContainer from '../container/renderMap.jsx';

class MapYourRoute extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    const divStyle = {
      border: '1px solid black',
      margin: '20px',
      padding: '50px'
    };
    return (
      <div>
        <div> 
          <GoogleMapsContainer />
        </div>
        <div style={divStyle}> --Map information will go here --
        </div>
      </div>
    )
  }
}

export default MapYourRoute;