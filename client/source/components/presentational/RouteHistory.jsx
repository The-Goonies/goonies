import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import RouteContainer from './RouteContainer';

class RouteHistory extends React.Component {
  constructor({ props, routes }) {
    super(props);

    this.state = {
      routes,
    };

    this.addRoute = this.addRoute.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpsert = this.handleUpsert.bind(this);
  }

  // TODO: get routes sorted by date, or do we want as is by most recently created?

  componentDidMount() {
    this.getRoutes();
  }

  getRoutes() {
    const { username } = this.props;
    return axios.get(`/api/routes?username=${username}`)
      .then((newRoutes) => {
        this.setState({
          routes: newRoutes.data,
        });
      });
  }


  addRoute() {
    const { routes } = this.state;
    const emptyRoute = {
      tempId: Math.random(),
      id: null,
      routeName: '',
      date: '',
      distanceInMiles: 0,
      timeToCompleteInHours: 0,
      averageSpeedMPH: 0,
    };
    routes.unshift(emptyRoute);
    this.setState({
      routes,
    });
  }

  handleDelete(targetRoute) {
    console.log('targetRoute is', targetRoute);
    /* if targetRoute has tempId, it has not yet been saved to the database
    and we can delete locally without communicating to the database */
    if (!targetRoute.id) {
      const { routes } = this.state;
      let targetIndex;
      for (let i = 0; i < routes.length; i += 1) {
        if (routes[i].tempId === targetRoute.tempId) {
          targetIndex = i;
        }
      }
      routes.splice(targetIndex, 1);
      this.setState({
        routes,
      });
      /* otherwise deletion requires communicating with the database */
    } else {
      axios.delete('/api/routes', { params: targetRoute })
        // .then(res => console.log('delete successful', res))
        .then(() => this.getRoutes())
        .catch(error => console.log(error));
    }
  }

  handleUpsert(route) {
    const { username } = this.props;
    axios.patch('/api/routes', { data: { route, username } })
      .then(() => console.log('upsert successful'))
      .then(() => this.getRoutes());
  }

  render() {
    const avgSpeed = 'placeholder';
    const { routes } = this.state;
    return (
      // <div className="routeHistory">
      //   <div className="routesHeader">
      //     <h1>My Route History</h1>
      //     <p>
      //       Average Speed:
      //       {avgSpeed}
      //       {' '}
      //       MPH
      //     </p>
      //   </div>
      //   <button className="addRouteButton" type="button" onClick={this.addRoute}>Add New Route</button>
      //   <div className="routesContainer">
      //     { routes.map(route => (
      //       <RouteContainer
      //         key={Math.random()}
      //         route={route}
      //         handleDelete={this.handleDelete}
      //         handleUpsert={this.handleUpsert}
      //       />)) }
      //   </div>
      // </div>


      <div className="container">
        <div className="header clearfix">
        </div>

        <div className="jumbotron">
          <h1>Route History</h1>
          <p><a className="btn btn-sm btn-success" href="#" role="button">Add a route</a></p>
        </div>

        <div className="row marketing">
          <div className="col-lg-6">
            <h4>Subheading</h4>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

            <h4>Subheading</h4>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

            <h4>Subheading</h4>
            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
          </div>

          <div className="col-lg-6">
            <h4>Subheading</h4>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

            <h4>Subheading</h4>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

            <h4>Subheading</h4>
            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
          </div>
        </div>

        <footer className="footer">
          <p>&copy; 2016 Company, Inc.</p>
        </footer>

      </div>
    );
  }
}

RouteHistory.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  username: PropTypes.string.isRequired,
};

export default RouteHistory;
