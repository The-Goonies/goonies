import React from 'react';

class UserProfile extends React.Component {
  constructor({ props, userInfo }) {
    super(props);

    const { username, experience, password } = userInfo;

    this.state = {
      username,
      experience,
      password,
    };
  }

  render() {
    const { username, password, experience } = this.state;
    return (
      <div>
        <h1>User Profile</h1>
        <p>
          Username:
          { username }
          <br />
          Password:
          { password }
          <br />
          Experience Level:
          { experience }
        </p>
      </div>
    );
  }
}

export default UserProfile;
