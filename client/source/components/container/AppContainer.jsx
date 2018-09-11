import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from '@reach/router';
import MapYourRoute from '../presentational/MapYourRoute.jsx';
import GoogleMapsContainer from './renderMap.jsx';
import SignUp from '../presentational/SignUp.jsx';
import Login from '../presentational/Login.jsx';
import RouteHistory from '../presentational/RouteHistory.jsx';
import routes from '../../SampleData.js';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <nav>
          <Link to="/">Login</Link>
          {' | '}
          <Link to="/signUp">Sign Up</Link>
          {' | '}
          <Link to="/maps">Map Your Route</Link>
          {' | '}
          <Link to="/user">User Profile</Link>
          {' | '}
          <Link to="/routes">Route History</Link>
        </nav>
        <Router>
          <MapYourRoute path="/maps" />
          <SignUp path="/signUp" />
          <Login exact path="/" />
          <RouteHistory path="/routes" routes={routes} />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('app'));
