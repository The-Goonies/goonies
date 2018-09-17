import React from 'react';
import PropTypes from 'prop-types';

class RouteForm extends React.Component {
  constructor({ props, route }) {
    super(props);

    const {
      tempId,
      id,
      routeName,
      date,
      distanceInMiles,
      timeToCompleteInHours,
      averageSpeedMPH,
    } = route;

    this.state = {
      tempId,
      id,
      routeName,
      date,
      distanceInMiles,
      timeToCompleteInHours,
      averageSpeedMPH,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { handleEditSubmit, handleUpsert } = this.props;
    handleEditSubmit(this.state);
    handleUpsert(this.state);
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
      id,
      routeName,
      date,
      distanceInMiles,
      timeToCompleteInHours,
      averageSpeedMPH,
    } = this.state;
    return (
      // TODO: implement validation on this form
      <div className="routeForm" style={divStyle}>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="routeName">
            Route Name:
            <input type="text" name="routeName" value={routeName} onChange={this.onChange} />
          </label>
          <br />
          <label htmlFor="date">
            Date:
            <input type="date" name="date" value={date} onChange={this.onChange} />
          </label>
          <br />
          <label htmlFor="distance">
          Distance:
            <input type="textarea" name="distanceInMiles" value={distanceInMiles} onChange={this.onChange} />
          </label>
          <br />
          <label htmlFor="duration">
            Duration:
            <input type="text" name="timeToCompleteInHours" value={timeToCompleteInHours} onChange={this.onChange} />
          </label>
          <br />
          <label htmlFor="speed">
          Speed (MPH):
            <input type="text" name="averageSpeedMPH" value={averageSpeedMPH} onChange={this.onChange} />
          </label>
          <br />
          <input type="hidden" name="id" value={id} onChange={this.onChange} />
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
  handleUpsert: PropTypes.func.isRequired,
};

export default RouteForm;
