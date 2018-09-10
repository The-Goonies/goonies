import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin(e) {
    var LoginInfo = {
      username: this.state.username,
      password: this.state.password
    };

    axios.get('/api/users/login', {
      params: LoginInfo
    })
      .then((res) => {
        console.log('login response', res);
      })
      .catch((err) => {
        console.log('login error', err);
      })
  }


  render() {
    return (
      <div>
        <form>

          <label>Username:
            <input type='text'
              name='username'
              onChange={this.handleChange} />
            <br></br>
          </label>

          <label>Password:
            <input type='password'
              name='password'
              onChange={this.handleChange} />
            <br></br>
          </label>

          <input type="button"
            value="Login"
            onClick={this.handleLogin} />
        </form>
      </div>
      )
  }

}

export default Login;