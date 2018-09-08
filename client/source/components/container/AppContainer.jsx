import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from '@reach/router';
import MapYourRoute from '../presentational/MapYourRoute.jsx';
import GoogleMapsContainer from './renderMap.jsx';
import SignUp from '../presentational/SignUp.jsx';


class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <nav>
          <Link to='/'>Login</Link>{' | '}
          <Link to='/signUp'>Sign Up</Link>{' | '}
          <Link to='/maps'>Map Your Route</Link>{' | '}
          <Link to='/user'>User Profile</Link>
        </nav>
        <Router>
          <MapYourRoute path='/maps' />
          <SignUp path='/signUp' />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('app'));
