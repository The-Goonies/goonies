import React from 'react';
import axios from 'axios';
import { Redirect } from '@reach/router';
import PropTypes from 'prop-types';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
      signedUp: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.redirToSignUp = this.redirToSignUp.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleLogin() {
    const { username, password } = this.state;
    const LoginInfo = { username, password };
    const { transferUserInfo } = this.props;

    axios.get('/api/users/login', {
      params: LoginInfo,
    })
      .then((res) => {
        if (res.data === 'Invalid Password') {
          alert('Invalid username and password. Please try again.');
        } else {
          //  success! redirect
          transferUserInfo(res.data);
          this.setState({
            loggedIn: true,
          });
        }
      })
      .catch((err) => {
        console.log('login error', err);
      });
  }

  redirToSignUp() {
    const { signedUp } = this.state;
    this.setState({
      signedUp: !signedUp,
    });
  }


  render() {
    //  destructuring state object per airbnb syntax guide
    const { loggedIn, signedUp } = this.state;
    //  if loggedIn is true, then redirect to /maps page without throwing error
    if (loggedIn) {
      return <Redirect noThrow to="/maps" />;
    }
    if (signedUp) {
      return <Redirect noThrow to="/signUp" />;
    }
    return (
      <div className="login">
        <form>
          <div className="loginfield">
            <label htmlFor="username">
              Username:
              <br />
              <input type="text" name="username" onChange={this.handleChange} />
            </label>
            <br />
            <label htmlFor="password">
              Password:
              <br />
              <input type="password" name="password" onChange={this.handleChange} />
            </label>
            <br />
          </div>
          <div className="loginPageButtons">
            <input type="button" className="login" value="Login" onClick={this.handleLogin} />
            <input type="button" value="New User? Register" onClick={this.redirToSignUp} />
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  transferUserInfo: PropTypes.func.isRequired,
};

export default Login;
