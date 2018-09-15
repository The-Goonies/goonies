import React from 'react';

class ExperienceEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log('ExperienceEdit props=', this.props);
  }

  render() {
    return (
      <div>
        <input placeholder="Experience" />
      </div>
    );
  }
}

export default ExperienceEdit;
