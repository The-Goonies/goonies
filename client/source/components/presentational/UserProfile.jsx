import React from 'react';

class UserProfile extends React.Component {
  constructor({ props, userInfo }) {
    super(props);

    const { username, experience, password } = userInfo;

    this.state = {
      username,
      experience,
      password,
      fakePassword: '*****',
    };
  }

  changeUserProfile(e) {
  }

  render() {
    const { username, experience } = this.state;
    return (
      <div>
        <h1>User Profile</h1>
        <form>
          Username:
          { username }
          <input type="button" value="Change Username" name="newName" onClick={this.changeUserProfile}/>
          <br />
          Experience Level:
          { experience }
          <input type="button" value="Edit" name="newExp" onClick={this.changeUserProfile} />
          <br />
          <h4>Change Password</h4>
          Old Password:
          <br />
          <input type="text" name="oldPassword" />
          <br />
          New Password:
          <br />
          <input type="text" name="newPassword" />
          <br />
          Confirm New Password:
          <br />
          <input type="text" name="confirmNewPassword" />
          <br />
          <input type="button" value="Update Password" />
        </form>
      </div>
    );
  }
}

export default UserProfile;
