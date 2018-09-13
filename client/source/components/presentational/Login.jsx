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
        if (res.data === 'invalid') {
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
      return <Redirect noThrow to="/user" />;
    }
    if (signedUp) {
      return <Redirect noThrow to="/signUp" />;
    }
    return (
      <div>
        <form>
          Username:
          <input type="text" name="username" onChange={this.handleChange} />
          <br />
          Password:
          <input type="password" name="password" onChange={this.handleChange} />
          <br />
          <input type="button" value="Login" onClick={this.handleLogin} />
          <br />
          <input type="button" value="New User? Register" onClick={this.redirToSignUp} />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  transferUserInfo: PropTypes.func.isRequired,
};

export default Login;
