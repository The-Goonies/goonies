import React from 'react';
import PropTypes from 'prop-types';

class UsernameEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUsername: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { username, handleCancelChange, handleNewUsername } = this.props;
    const { newUsername } = this.state;
    return (
      <div>
        <input type="text" placeholder={username} name="newUsername" onChange={this.handleChange} />
        <button type="button" onClick={() => { handleNewUsername(newUsername); }}>Save</button>
        <button type="button" onClick={() => { handleCancelChange('cancelUsername'); }}>Cancel</button>
      </div>
    );
  }
}

UsernameEdit.propTypes = {
  username: PropTypes.string.isRequired,
  handleCancelChange: PropTypes.func.isRequired,
  handleNewUsername: PropTypes.func.isRequired,
};

export default UsernameEdit;
