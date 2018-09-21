import React from 'react';
import { Link, Router } from '@reach/router';
import GoogleMapsContainer from './renderMap';
import RouteHistory from './RouteHistory';
import routes from '../../SampleData';
import ParkInfo from './ParkInfo';
import UserProfile from './UserProfile';
import Timer from './Timer';
import Weather from './Weather';

class MapYourRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id } = this.props;
    return (
      <div>
        <h3>Your Map</h3>
        {/* <div>
          <GoogleMapsContainer />
        </div> */}
        <nav>
          <button className="menu" type="button" onClick={this.handleMenuClick.bind(this)}>MENU</button>
          <div className="dropdown">
            <div className="close">
              <button className="close" type="button" onClick={this.handleMenuClick.bind(this)}>X</button>
            </div>
            <div role="presentation" onClick={this.handleMenuClick.bind(this)} onKeyPress={this.handleMenuClick.bind(this)}>
              <ul className="dropdown">
                <li><Link to="/maps" className="menu-link">Map</Link></li>
                <li><Link to="/weather" className="menu-link">Weather</Link></li>
                <li><Link to="/info" className="menu-link">Park Info</Link></li>
                <li><Link to="/timer" className="menu-link">Stop Watch</Link></li>
                <li><Link to="/routes" className="menu-link">My History</Link></li>
                <li><Link to="/user" className="menu-link">My Profile</Link></li>
                <li><Link to="/" className="menu-link">Sign Out</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <Router>
          {/* <SignUp path="/signUp" transferUserInfo={this.transferUserInfo} /> */}
          <MapYourRoute path="/" />
          <UserProfile path="/user" userInfo={{ id }} />
          <ParkInfo path="/info" />
          <RouteHistory path="/routes" routes={routes} username={id} />
          <Weather path="/weather" />
          <Timer path="/timer" />
        </Router>
      </div>
    );
  }
}


export default MapYourRoute;
