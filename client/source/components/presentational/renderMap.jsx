import React from 'react';
import {
  GoogleApiWrapper, InfoWindow, Map, Marker,
} from 'google-maps-react';

import key from '../../../../myapikey.js';

const apiKey = key.key;
// const apiKey = `${process.env.REACT_APP_GOOGLE_MAPS_KEY}`;

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMarker: {},
      selectedPlace: {},
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
    });
  }

  render() {
    const style = {
      width: '50vw',
      height: '75vh',
      marginLeft: 'auto',
      marginRight: 'auto',

    };
    return (
      <Map
        style={style}
        google={this.props.google}
        zoom={9}
        initialCenter={{ lat: 37.749669, lng: -119.555108 }}

      >
        <Marker
          onClick={this.onMarkerClick}
          title="Changing Colors Garage"
          position={{ lat: 37.749669, lng: -119.555108 }}
          name="Changing Colors Garage"
        />

      </Map>
    );
  }
}

export default GoogleApiWrapper({ apiKey })(GoogleMapsContainer);
