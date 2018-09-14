import React from 'react';

class UserProfile extends React.Component {
  constructor({ props, userInfo }) {
    super(props);

    const { username, experience } = userInfo;

    this.state = {
      username,
      experience,
      // password,
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    };
    this.changePassword = this.changePassword.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  changePassword(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handlePasswordChange() {
    const {
      oldPassword, newPassword, confirmNewPassword,
    } = this.state;
    if (newPassword !== confirmNewPassword) {
      alert('Your new password does not match your password confirmation. Please try again');
    }
    if (newPassword === oldPassword) {
      alert('Your new password should not match your old password. Please try again.');
    }
  }

  render() {
    const { username, experience } = this.state;
    return (
      <div>
        <h1>User Profile</h1>
        <form>
          Username:
          { username }
          <input type="button" value="Change Username" name="newName" onClick={this.changeUserProfile} />
          <br />
          Experience Level:
          { experience }
          <input type="button" value="Edit" name="newExp" onClick={this.changeUserProfile} />
          <br />
          <h4>Change Password</h4>
          Old Password:
          <br />
          <input type="text" name="oldPassword" onChange={this.changePassword} />
          <br />
          New Password:
          <br />
          <input type="text" name="newPassword" onChange={this.changePassword} />
          <br />
          Confirm New Password:
          <br />
          <input type="text" name="confirmNewPassword" onChange={this.changePassword} />
          <br />
          <input type="button" value="Update Password" onClick={this.handlePasswordChange} />
        </form>
      </div>
    );
  }
}

export default UserProfile;
