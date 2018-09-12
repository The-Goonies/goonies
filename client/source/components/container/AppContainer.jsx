import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from '@reach/router';
import MapYourRoute from '../presentational/MapYourRoute';
import SignUp from '../presentational/SignUp';
import Login from '../presentational/Login';
import RouteHistory from '../presentational/RouteHistory';
import routes from '../../SampleData';

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
