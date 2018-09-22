import React from 'react';
// import PropTypes from 'prop-types';

class ExperienceEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newExperience: 'Novice',
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
    console.log(newExperience);// remove
    // const { handleNewExperience, handleCancelChange } = this.props;
    return (
      <div>
        <select name="newExperience" onChange={this.handleChange}>
          <option value="Novice">Novice</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <button type="button" onClick={() => { console.log('new Experience!'); }}>Save</button>
        <button type="button" onClick={() => { console.log('cancel experience!'); }}>Cancel</button>
      </div>
    );
  }
}

// ExperienceEdit.propTypes = {
//   handleCancelChange: PropTypes.func.isRequired,
//   handleNewExperience: PropTypes.func.isRequired,
// };

export default ExperienceEdit;
