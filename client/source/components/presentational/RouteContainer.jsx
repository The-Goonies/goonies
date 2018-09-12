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
    const { route: routeName } = this.props;
    console.log(routeName);
    if (routeName === 'trigger update') {
      this.setState({
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

  handleDelete() {
    console.log('delete clicked');
  }

  renderView() {
    const { update, route } = this.state;
    if (update) {
      return (
        <RouteForm
          route={route}
          handleEditSubmit={this.handleEditSubmit}
          handleDelete={this.handleDelete}
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
    console.log(this.props);
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
};

export default RouteContainer;
