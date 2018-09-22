import React from 'react';
// import PropTypes from 'prop-types';

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
    const { newUsername } = this.state;
    console.log(newUsername);
    return (
      <div>
        <input type="text" name="newUsername" onChange={this.handleChange} />
      </div>
    );
  }
}

// UsernameEdit.propTypes = {
//   username: PropTypes.string.isRequired,
//   handleCancelChange: PropTypes.func.isRequired,
//   handleNewUsername: PropTypes.func.isRequired,
// };

export default UsernameEdit;
