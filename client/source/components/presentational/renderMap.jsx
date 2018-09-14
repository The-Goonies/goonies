import React from 'react';
import PropTypes from 'prop-types';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

// import key from '../../../../myapikey';

// const apiKey = key.key;
const apiKey = '';
// const apiKey = `${process.env.REACT_APP_GOOGLE_MAPS_KEY}`;

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // activeMarker: {},
      // selectedPlace: {},
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick() {
    this.setState({
      // selectedPlace: props,
      // activeMarker: marker,
    });
  }

  render() {
    const style = {
      width: '50vw',
      height: '75vh',
      marginLeft: 'auto',
      marginRight: 'auto',

    };
    const { google } = this.props;
    console.log(google);
    return (
      <div className="map">
        <Map
          style={style}
          google={google}
          zoom={9}
          initialCenter={{ lat: 37.749669, lng: -119.555108 }}

        >
          {/* <Marker
            onClick={this.onMarkerClick}
            title="Changing Colors Garage"
            position={{ lat: 37.749669, lng: -119.555108 }}
            name="Changing Colors Garage"
          /> */}

        </Map>
      </div>
    );
  }
}

GoogleMapsContainer.propTypes = {
  google: PropTypes.shape({
    maps: PropTypes.object,
  }).isRequired,
};

export default GoogleApiWrapper({ apiKey })(GoogleMapsContainer);
