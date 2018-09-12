import React from 'react';
import PropTypes from 'prop-types';

class RouteForm extends React.Component {
  constructor({ props }) {
    super(props);

    this.state = {
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    const {
      route: {
        _id,
        routeName,
        date,
        distanceInMiles,
        timeToCompleteInHours,
        averageSpeedMPH,
      },
    } = this.props;
    if (!this.state.routeName) {
      this.setState({
        _id,
        routeName,
        date,
        distanceInMiles,
        timeToCompleteInHours,
        averageSpeedMPH,
      });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { handleEditSubmit } = this.props;
    handleEditSubmit(this.state);
  }

  onDelete() {
    const { handleDelete } = this.props;
    handleDelete(this.state);
  }

  render() {
    const divStyle = {
      border: '1px solid black',
      margin: '20px',
      padding: '50px',
    };
    const {
      _id,
      routeName,
      date,
      distanceInMiles,
      timeToCompleteInHours,
      averageSpeedMPH,
    } = this.state;
    return (
      // TODO: will want to implement validation on this form
      <div className="routeForm" style={divStyle}>
        <form onSubmit={this.onSubmit}>
          <label>Route Name: </label>
          <input type="text" name="routeName" value={routeName} onChange={this.onChange} />
          <br />
          <label>Date: </label>
          <input type="date" name="date" value={date} onChange={this.onChange} />
          <br />
          <label>Distance: </label>
          <input type="textarea" name="distanceInMiles" value={distanceInMiles} onChange={this.onChange} />
          <br />
          <label>Duration: </label>
          <input type="text" name="timeToCompleteInHours" value={timeToCompleteInHours} onChange={this.onChange} />
          <br />
          <label>Speed (MPH): </label>
          <input type="text" name="averageSpeedMPH" value={averageSpeedMPH} onChange={this.onChange} />
          <br />
          <input type="hidden" name="_id" value={_id} onChange={this.onChange} />
          <button type="submit">Save</button>
          <button type="button" onClick={this.onDelete}>Delete</button>
        </form>
      </div>
    );
  }
}

RouteForm.propTypes = {
  route: PropTypes.shape({
    routeName: PropTypes.string,
    date: PropTypes.string,
    distanceInMiles: PropTypes.number,
    timeToCompleteInHours: PropTypes.number,
    averageSpeedMPH: PropTypes.number,
  }).isRequired,
  handleEditSubmit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default RouteForm;
