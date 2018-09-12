import React from 'react';
import axios from 'axios';
import { Redirect } from '@reach/router';


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
    axios.post('/api/users/create', userInfo)
      .then(function (response) {
        if (response.data === 'Username Taken') {
          alert('That username is already taken. Please choose another username.')
        } else {
          //  success! redirect
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
      <div>
        <form>
          Username:
          <input type="text" name="username" onChange={this.handleChange} />
          <br />
          Password:
          <input type="password" name="password" onChange={this.handleChange} />
          <br />
            Experience Level:
          <select name="experience" value={experience} onChange={this.handleChange}>
            <option value="Novice">Novice</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <br />
          <input type="button" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default SignUp;
