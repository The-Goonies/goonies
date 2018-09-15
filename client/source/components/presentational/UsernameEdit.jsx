import React from 'react';
import PropTypes from 'prop-types';

class UsernameEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUsername: '',
    };
  }

  render() {
    const { username, handleCancelChange } = this.props;
    return (
      <div>
        <input type="text" placeholder={username} name="newUsername" />
        <button type="button">Save</button>
        <button type="button" onClick={() => {handleCancelChange('cancelUsername')}}>Cancel</button>
      </div>
    );
  }
}

UsernameEdit.propTypes = {
  username: PropTypes.string.isRequired,
  handleCancelChange: PropTypes.func.isRequired,
};

export default UsernameEdit;
