import React from 'react';
// import { Link, Router } from '@reach/router';
import GoogleMapsContainer from './renderMap';
// import Journals from './Journals';
// import routes from '../../SampleData';
// import ParkInfo from './ParkInfo';
// import UserProfile from './UserProfile';

// import Weather from './Weather';

class MapYourRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '1', // change this
    };
  }

  render() {
    const { id } = this.state;
    console.log(id);
    // const { id } = this.props;
    return (
      <div>
        <h3>Your Map</h3>
        <div>
          <GoogleMapsContainer />
        </div>
        {/*
        <li><Link to="/" className="menu-link">Dashboard</Link></li>
        <li><Link to="/routes" className="menu-link">My History</Link></li>
        <li><Link to="/user" className="menu-link">My Profile</Link></li>
        <Router>
          <SignUp path="/signUp" transferUserInfo={this.transferUserInfo} />
          <UserProfile path="/user" userInfo={id} />
          <ParkInfo path="/info" />
          <RouteHistory path="/routes" routes={routes} username={id} />
          <Weather path="/weather" />
          <Timer path="/timer" />
        </Router>
        */}
      </div>
    );
  }
}


export default MapYourRoute;
