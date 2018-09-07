import React from 'react';
import ReactDom from 'react-dom';

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
        <div style={divStyle}> --Map will go here --
        </div>
        <div style={divStyle}> --Map information will go here --
        </div>
      </div>
    )
  }
}

export default MapYourRoute;