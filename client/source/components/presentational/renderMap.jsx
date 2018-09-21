// import React from 'react';
// // import PropTypes from 'prop-types';
// // import { GoogleApiWrapper, Map } from 'google-maps-react';
// // import dotenv from 'dotenv';
// import axios from 'axios';


// // dotenv.config({ path: '../../../../.env' });
// // import key from '../../../../myapikey';

// // const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY //|| key.key;

// // const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;

// class GoogleMapsContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // activeMarker: {},
//       // selectedPlace: {},
//       apiKey: '',
//     };
//     // binding this to event-handler functions
//     this.onMarkerClick = this.onMarkerClick.bind(this);
//     this.getApiKey = this.getApiKey.bind(this);
//   }

//   componentDidMount() {
//     this.getApiKey();
//   }

//   onMarkerClick() {
//     this.setState({
//       // selectedPlace: props,
//       // activeMarker: marker,
//     });
//   }

//   getApiKey() {
//     axios.get('/api/key').then((response) => {
//       console.log('My api key from server: ', response.data);
//       this.setState({ apiKey: response.data });
//     }).catch(() => {
//       console.log('unable to grab api key');
//     });
//   }

//   render() {
//     const style = {
//       width: '50vw',
//       height: '75vh',
//       marginLeft: 'auto',
//       marginRight: 'auto',

//     };
//     const { google } = this.props;
//     console.log(google);
//     return (
//       <div className="map">
//         <Map
//           style={style}
//           // google={google}
//           zoom={9}
//           initialCenter={{ lat: 37.749669, lng: -119.555108 }}

//         >
//           {/* <Marker
//             onClick={this.onMarkerClick}
//             title="Changing Colors Garage"
//             position={{ lat: 37.749669, lng: -119.555108 }}
//             name="Changing Colors Garage"
//           /> */}

//         </Map>
//       </div>
//     );
//   }
// }

// // GoogleMapsContainer.propTypes = {
// //   google: PropTypes.shape({
// //     maps: PropTypes.object,
// //   }).isRequired,
// // };

// export default GoogleMapsContainer;
