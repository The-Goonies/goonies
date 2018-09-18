import React from 'react';
import axios from 'axios';
import { Redirect } from '@reach/router';
import PropTypes from 'prop-types';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      experience: 'Novice',
      loggedIn: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit() {
    const { username, password, experience } = this.state;
    const userInfo = { username, password, experience };
    const { transferUserInfo } = this.props;
    axios.post('/api/users/create', userInfo)
      .then((res) => {
        if (res.data === 'Username Taken') {
          alert('That username is already taken. Please choose another username.');
        } else {
          //  success! redirect
          transferUserInfo(JSON.parse(res.config.data));
          this.setState({
            loggedIn: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    //  destructuring state object per airbnb syntax guide
    const { loggedIn, experience } = this.state;
    //  if user successfully signs up, redirect to maps page
    if (loggedIn) {
      return <Redirect noThrow to="/maps" />;
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
            <p>Experience Level:</p>
            <select name="experience" value={experience} onChange={this.handleChange}>
              <option value="Novice">Novice</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <br />
            <input className="signup" type="button" value="Submit" onClick={this.handleSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  transferUserInfo: PropTypes.func.isRequired,
};


export default SignUp;
