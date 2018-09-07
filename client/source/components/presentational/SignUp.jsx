import React from 'react';
import ReactDom from 'react-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      experience: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    console.log(this.state.username);
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>Username:
            <input type="text" name="username" onChange={this.handleChange}/>
          </label>
          <label>Password:
            <input type="password" name="password" onChange={this.handleChange}/>
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
      )
  }
}

export default SignUp;