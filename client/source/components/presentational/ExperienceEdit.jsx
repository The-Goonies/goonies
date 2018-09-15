import React from 'react';
import PropTypes from 'prop-types';

class ExperienceEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newExperience: '',
    };
    console.log('ExperienceEdit props=', this.props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { experience } = this.props;
    return (
      <div>
        <select name="newExperience" value={experience} onChange={this.handleChange}>
          <option value="Novice">Novice</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
    );
  }
}

ExperienceEdit.propTypes = {
  experience: PropTypes.string.isRequired,
  handleCancelChange: PropTypes.func.isRequired,
  handleNewExperience: PropTypes.func.isRequired,
};

export default ExperienceEdit;
