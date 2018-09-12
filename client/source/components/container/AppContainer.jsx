import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from '@reach/router';
<<<<<<< HEAD
import MapYourRoute from '../presentational/MapYourRoute';
import SignUp from '../presentational/SignUp';
import Login from '../presentational/Login';
import RouteHistory from '../presentational/RouteHistory';
import routes from '../../SampleData';
import Weather from '../presentational/Weather';
import UserProfile from '../presentational/UserProfile';
=======
import MapYourRoute from '../presentational/MapYourRoute.jsx';
import SignUp from '../presentational/SignUp.jsx';
import Login from '../presentational/Login.jsx';
import RouteHistory from '../presentational/RouteHistory.jsx';
import routes from '../../SampleData.js';
// import GoogleMapsContainer from '../presentational/renderMap.jsx';
// import menuIcon from '../../../images/menu-icon.png';
>>>>>>> add toggle for menu button, fix some eslint syntax

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingMenu: true,
    };
  }

  handleMenuClick() {
    const { showingMenu } = this.state;
    this.setState({ showingMenu: !showingMenu });
  }

  render() {
    const { showingMenu } = this.state;
    return (
      <div>
        <h1>Backpacker</h1>
        <button type="button" onClick={this.handleMenuClick.bind(this)}>MENU</button>
        { showingMenu
          ? (
            <nav>
              <Link to="/">Login</Link>
              <br />
              <Link to="/signUp">Sign Up</Link>
              <br />
              <Link to="/maps">Map Your Route</Link>
              <br />
              <Link to="/user">User Profile</Link>
              <br />
              <Link to="/routes">Route History</Link>
            </nav>
          )
          : (null)
        }

        <Router>
          <MapYourRoute path="/maps" />
          <Login exact path="/" />
          <SignUp path="/signUp" />
          <MapYourRoute path="/maps" />
          <UserProfile path="/user" />
          <RouteHistory path="/routes" routes={routes} />
          <Weather path="/weather" />
        </Router>
      </div>
    );
  }
}

const document = window.document;
ReactDOM.render(<AppContainer />, document.getElementById('app'));
