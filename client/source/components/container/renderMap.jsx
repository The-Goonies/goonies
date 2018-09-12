import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import key from '../../../../myapikey';

const apiKey = key.key;
// const apiKey = `${process.env.REACT_APP_GOOGLE_MAPS_KEY}`;

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    const { google } = this.props;
    this.state = {
      activeMarker: {},
      selectedPlace: {},
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick() {
    this.setState({
      placeholder: 'placeholder',
      // selectedPlace: props,
      // activeMarker: marker,
    });
  }

  clickedPos(event) {
    console.log(mapProps)
    // console.log('mapProps', mapProps)
    // console.log(event)
    var lat = event.google.maps.LatLng() 
    var lng = event.google.maps.LatLng()
    console.log('lat',lat,'long', lng)

  }

  render() {
    const style = {
      width: '50vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto',
        
    }
    return (
      <Map
      onClick = {(e) => this.clickedPos(e)}
        style = { style }
        google = { this.props.google }
        zoom = { 9 }
        initialCenter = {{ lat: 37.749669, lng: -119.555108 }}
        
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
