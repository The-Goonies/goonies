import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import UsernameEdit from './UsernameEdit';
import ExperienceEdit from './ExperienceEdit';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      experience: '',
      oldPassword: '',
      newPassword: 'filler',
      confirmNewPassword: '',
      editUsername: false,
      editExperience: false,
    };
    this.changePassword = this.changePassword.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.changeUserProfile = this.changeUserProfile.bind(this);
    this.handleCancelChange = this.handleCancelChange.bind(this);
    this.handleNewUsername = this.handleNewUsername.bind(this);
    this.handleNewExperience = this.handleNewExperience.bind(this);
  }


  //  ************** Password Change *************  //

  changePassword(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  emptyPasswords() {
    // console.log('empty password field')
    this.setState({
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });
  }

  updatePassword() {
    const { username, newPassword } = this.state;
    return axios.put(`/api/users/password/${username}/${newPassword}`)
      .then(() => {
        alert('Password is updated');
      })
      .then(() => {
        this.emptyPasswords();
      })
      .catch((err) => {
        alert(err);
      });
  }

  passwordMatch(userData) { // need to fix
    if (userData.data === 'Invalid Password') {
      if (alert('Your old password is incorrect. Please try again.')) {
        window.location.reload();
      }
      this.resetPasswordFields();
    } else {
      this.updatePassword();
      this.resetPasswordFields();
    }
  }

  handlePasswordChange() {
    const {
      username, oldPassword, newPassword, confirmNewPassword,
    } = this.state;

    if (newPassword !== confirmNewPassword) {
      alert('Your new password does not match your password confirmation. Please try again');
      this.emptyPasswords();
    } else if (newPassword === oldPassword) {
      alert('Your new password should not match your old password. Please try again.');
      console.log('trigger password change');
    } else {
      axios.get(`/api/users/login?username=${username}&password=${oldPassword}`)
        .then((res) => {
          this.passwordMatch(res);
        })
        .catch((err) => {
          console.log('err in verifying password', err);
        });
    }
  }

  //  ************** UserInfo Change *************  //

  changeUserProfile(e) {
    const { editUsername, editExperience } = this.state;
    if (e.target.name === 'newName') {
      this.setState({
        editUsername: !editUsername,
      });
    } else if (e.target.name === 'newExp') {
      this.setState({
        editExperience: !editExperience,
      });
    }
  }

  handleCancelChange(componentChange) {
    const { editUsername, editExperience } = this.state;
    if (componentChange === 'cancelUsername') {
      this.setState({
        editUsername: !editUsername,
      });
    } else {
      this.setState({
        editExperience: !editExperience,
      });
    }
  }

  handleNewUsername(newUsername) {
    const { username } = this.state;
    axios.put(`/api/users/update/${username}/${newUsername}`)
      .then((res) => {
        if (res.data === 'Username Updated') {
          this.setState({
            username: newUsername,
          });
        }
      })
      .then(() => {
        this.handleCancelChange('cancelUsername');
      })
      .catch((err) => {
        alert(err);
      });
  }

  handleNewExperience(newExperience) {
    const { username } = this.state;
    axios.put(`/api/users/update/exp/${username}/${newExperience}`)
      .then((res) => {
        if (res.data === 'Experience Updated') {
          this.setState({
            experience: newExperience,
          });
        }
      })
      .then(() => {
        this.handleCancelChange('cancelExperience');
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    const {
      username,
      experience,
      oldPassword,
      newPassword,
      confirmNewPassword,
      editUsername,
      editExperience,
    } = this.state;
    return (
      <div className="userprofile">
        <h3>My Profile</h3>
        <form>
          {
            editUsername ? (
              <UsernameEdit
                username={username}
                handleCancelChange={this.handleCancelChange}
                handleNewUsername={this.handleNewUsername}
              />
            ) : (
              <div className="userprofilewrapper">
                <p>
                  Username:
                  {' '}
                  {username}
                </p>
                <input type="button" value="Change Username" name="newName" onClick={this.changeUserProfile} />
              </div>
            )
          }
          <br />
          {
            editExperience ? (
              <ExperienceEdit
                experience={experience}
                handleCancelChange={this.handleCancelChange}
                handleNewExperience={this.handleNewExperience}
              />
            ) : (
              <div>
                <p>
                  Experience Level:
                  {' '}
                  {experience}
                </p>
                <input type="button" value="Edit" name="newExp" onClick={this.changeUserProfile} />
              </div>
            )
          }
          <br />
          <h3>Change Password</h3>
          <label htmlFor="oldpassword">
          Old Password:
            <br />
            <input type="password" name="oldPassword" value={oldPassword} onChange={this.changePassword} />
          </label>
          <br />
          <label htmlFor="newpassword">
          New Password:
            <br />
            <input type="password" name="newPassword" value={newPassword} onChange={this.changePassword} />
          </label>
          <br />
          <label htmlFor="confirmpassword">
          Confirm New Password:
            <br />
            <input type="password" name="confirmNewPassword" value={confirmNewPassword} onChange={this.changePassword} />
          </label>
          <br />
          <input type="button" value="Update Password" onClick={this.handlePasswordChange} />
        </form>
      </div>
    );
  }
}

// UserProfile.propTypes = {
//   userInfo: PropTypes.objectOf(PropTypes.string).isRequired,
// };

export default UserProfile;
