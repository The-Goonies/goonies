import React from 'react';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';

import axios from 'axios';

import TrailList from './TrailList.jsx';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: '',
      hikingTrails: [
        {
          id: 7005207,
          name: 'Half Dome',
          type: 'Featured Hike',
          summary: 'THE premier route in Yosemite. Hike to the top of the most iconic granite dome in the USA.',
          difficulty: 'black',
          stars: 4.9,
          starVotes: 139,
          location: 'Yosemite Valley, California',
          url: 'https://www.hikingproject.com/trail/7005207/half-dome',
          imgSqSmall: 'https://cdn-files.apstatic.com/hike/7035178_sqsmall_1502461759.jpg',
          imgSmall: 'https://cdn-files.apstatic.com/hike/7035178_small_1502461759.jpg',
          imgSmallMed: 'https://cdn-files.apstatic.com/hike/7035178_smallMed_1502461759.jpg',
          imgMedium: 'https://cdn-files.apstatic.com/hike/7035178_medium_1502461759.jpg',
          length: 14.7,
          ascent: 4692,
          descent: -4691,
          high: 8662,
          low: 4062,
          longitude: -119.5583,
          latitude: 37.7325,
          conditionStatus: 'All Clear',
          conditionDetails: '',
          conditionDate: '2018-08-20 12:20:25',
        }
      ]
    };
    this.setTrails = this.setTrails.bind(this);
    this.getTrailsData = this.getTrailsData.bind(this);
  }

  componentDidMount() {
    this.getTrailsData();
    this.getApiKey();
  }

  setTrails(data) {
    this.setState({
      hikingTrails: data,
    });
  }

  getApiKey() {
    axios.get('/api/key')
      .then((response) => {
        console.log('apikey?', response.data);
        this.setState({
          apiKey: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error, 'Could not get api key');
      });
  }

  getTrailsData() {
    axios.get('/api/trails')
      .then((response) => {
        console.log(response.data.trails);
        this.setState({
          hikingTrails: response.data.trails,
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error, 'Could not get weather data');
      });
  }

  handleMarkerClick(marker) {
    // use the data from marker when you click on marker
    console.log('marker', marker);
    console.log(this);
  }

  render() {
    console.log(this.state.hikingTrails)
    const markers = this.state.hikingTrails.map((trail, i) => (
      <Marker
        key={i}
        position={{
          lat: trail.latitude,
          lng: trail.longitude,
        }}
        //label={(i + 1).toString()}
        onClick={() => this.handleMarkerClick(trail)}
      />
    ));
    const YosemiteMap = withScriptjs(withGoogleMap(() => (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 37.749669, lng: -119.555108 }}
      >
        {markers}
      </GoogleMap>
    )));
    return (
      <div>
        <TrailList hikingTrails={this.state.hikingTrails} />
        <YosemiteMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${this.state.apiKey}`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '500px', width: '500px' }} />}
          mapElement={<div style={{ height: '100%', width: '100%' }} />}
        />
      </div>

    );
  }
}

export default GoogleMapsContainer;
