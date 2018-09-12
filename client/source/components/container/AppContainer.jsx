import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from '@reach/router';
import MapYourRoute from '../presentational/MapYourRoute.jsx';
import GoogleMapsContainer from '../presentational/renderMap.jsx';
import SignUp from '../presentational/SignUp.jsx';
import Login from '../presentational/Login.jsx';
import RouteHistory from '../presentational/RouteHistory.jsx';
import routes from '../../SampleData.js';
//import menuIcon from '../../../images/menu-icon.png';

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
          <SignUp path="/signUp" />
          <Login exact path="/" />
          <RouteHistory path="/routes" routes={routes} />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('app'));
