import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from '@reach/router';
import MapYourRoute from '../presentational/MapYourRoute';
import SignUp from '../presentational/SignUp';
import Login from '../presentational/Login';
import RouteHistory from '../presentational/RouteHistory';
import routes from '../../SampleData';
import Weather from '../presentational/Weather';
import UserProfile from '../presentational/UserProfile';
import Timer from '../presentational/Timer';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingMenu: false,
      username: '',
      password: '',
      experience: '',
    };
    this.transferUserInfo = this.transferUserInfo.bind(this);
  }

  handleMenuClick() {
    const { showingMenu } = this.state;
    this.setState({ showingMenu: !showingMenu });
  }

  transferUserInfo(userData) {
    this.setState({
      username: userData.username,
      password: userData.password,
      experience: userData.experience,
    });
  }

  render() {
    const {
      showingMenu, username, password, experience,
    } = this.state;
    return (
      <div className="header">
        <h1>Backpacker</h1>
        <nav>
          <button className="menu" type="button" onClick={this.handleMenuClick.bind(this)}>MENU</button>
          { showingMenu
            ? (
              <div className="dropdown">
                <div className="close">
                  <button className="close" type="button" onClick={this.handleMenuClick.bind(this)}>X</button>
                </div>
                <div role="presentation" onClick={this.handleMenuClick.bind(this)} onKeyPress={this.handleMenuClick.bind(this)}>
                  <ul className="dropdown">
                    <li><Link to="/maps" className="menu-link">Map</Link></li>
                    <li><Link to="/weather" className="menu-link">Weather</Link></li>
                    <li><Link to="/timer" className="menu-link">Stop Watch</Link></li>
                    <li><Link to="/routes" className="menu-link">My History</Link></li>
                    <li><Link to="/user" className="menu-link">My Profile</Link></li>
                    <li><Link to="/" className="menu-link">Sign Out</Link></li>
                  </ul>
                </div>
              </div>
            )
            : (null)
          }
        </nav>
        <Router>
          <Login exact path="/" transferUserInfo={this.transferUserInfo} />
          <SignUp path="/signUp" />
          <MapYourRoute path="/maps" />
          <UserProfile path="/user" userInfo={{ username, password, experience }} />
          <RouteHistory path="/routes" routes={routes} />
          <Weather path="/weather" />
          <Timer path="/timer" />
        </Router>
      </div>
    );
  }
}
const { document } = global;
ReactDOM.render(<AppContainer />, document.getElementById('app'));
