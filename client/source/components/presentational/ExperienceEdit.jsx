import React from 'react';
import PropTypes from 'prop-types';

class ExperienceEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newExperience: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { newExperience } = this.state;
    const { handleNewExperience, handleCancelChange } = this.props;
    return (
      <div>
        <select name="newExperience" onChange={this.handleChange}>
          <option value="Novice">Novice</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <button type="button" onClick={() => { handleNewExperience(newExperience); }}>Save</button>
        <button type="button" onClick={() => { handleCancelChange('cancelExp'); }}>Cancel</button>
      </div>
    );
  }
}

ExperienceEdit.propTypes = {
  handleCancelChange: PropTypes.func.isRequired,
  handleNewExperience: PropTypes.func.isRequired,
};

export default ExperienceEdit;
