import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Router} from '@reach/router';
import MapYourRoute from '../presentational/MapYourRoute.jsx';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <nav>
          <Link to='/'>Signup/Login</Link>{' | '}
          <Link to='/maps'>Map Your Route</Link>{' | '}
          <Link to='/user'>User Profile</Link>
        </nav>
        <Router>
          <MapYourRoute path='/maps' />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('app'));
