import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      experience: 'Novice'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    var userInfo = {
      username: this.state.username,
      password: this.state.password,
      experience: this.state.experience
    };
    axios.post('/api/users/create', userInfo)
      .then(function (response) {
        if (response.data === 'username taken') {
          alert('That username is already taken. Please choose another username.')
        } else {
          //success! redirect
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
      <div>
        <form>
          <label>Username:
            <input type="text" name="username" onChange={this.handleChange}/>
            <br></br>
          </label>
          <label>Password:
            <input type="password" name="password" onChange={this.handleChange}/>
            <br></br>
          </label>
          <label> Experience Level:
            <select name="experience" value={this.state.experience} onChange={this.handleChange}>
              <option value="Novice">Novice</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <br></br>
          </label>

          <input type="button" value="Submit" onClick={this.handleSubmit}/>
        </form>
      </div>
      )
  }
}

export default SignUp;