import React from 'react';

class UserProfile extends React.Component {
  constructor(props, userInfo) {
    super(props);

    const { username } = userInfo;
    console.log('what is userInfo', userInfo)
    this.state = {
    };
  }

  render() {
    return (
      <h1>User Profile</h1>
    );
  }
}

export default UserProfile;
