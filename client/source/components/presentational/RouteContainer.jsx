import React from 'react';
import PropTypes from 'prop-types';
import Route from './Route';
import RouteForm from './RouteForm';

class RouteContainer extends React.Component {
  constructor(props) {
    super(props);

    const { route } = this.props;

    this.state = {
      route,
      update: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidMount() {
  /* if id does not exist it means the "Add Route" button was clicked
  and so we want it to immediately be editable */
    const { route, route: { id } } = this.props;
    if (!id) {
      this.setState({
        route,
        update: true,
      });
    }
  }

  handleEdit() {
    this.setState({
      update: true,
    });
  }

  handleEditSubmit(route) {
    this.setState({
      route,
      update: false,
    });
  }

  renderView() {
    const { update, route } = this.state;
    const { handleDelete, handleUpsert } = this.props;
    if (update) {
      return (
        <RouteForm
          route={route}
          handleEditSubmit={this.handleEditSubmit}
          handleDelete={handleDelete}
          handleUpsert={handleUpsert}
        />
      );
    }
    return (
      <Route
        route={route}
        handleEdit={this.handleEdit}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}

RouteContainer.propTypes = {
  route: PropTypes.shape({
    routeName: PropTypes.string,
    date: PropTypes.string,
    distanceInMiles: PropTypes.number,
    timeToCompleteInHours: PropTypes.number,
    averageSpeedMPH: PropTypes.number,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpsert: PropTypes.func.isRequired,
};

export default RouteContainer;
