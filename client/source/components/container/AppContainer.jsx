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

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingMenu: true
    }
  }

  render() {
    return (
      <div>
        <h1>Backpacker</h1>
        <button>MENU</button>
        {(this.state.showingMenu)
          ? (
            <nav>
              <Link to='/'>Login</Link><br/>
              <Link to='/signUp'>Sign Up</Link><br/>
              <Link to='/maps'>Map Your Route</Link><br/>
              <Link to='/user'>User Profile</Link><br/>
              <Link to='/routes'>Route History</Link>
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

ReactDOM.render(<AppContainer />, document.getElementById('app'));
