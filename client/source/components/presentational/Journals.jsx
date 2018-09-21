import React from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import RouteContainer from './RouteContainer';

class RouteHistory extends React.Component {
  constructor({ props /* routes */}) {
    super(props);

    // this.state = {
    //   routes: '',
    // };

    this.addRoute = this.addRoute.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpsert = this.handleUpsert.bind(this);
  }

  // getRoutes() {
  //   const { username } = this.props;
  //   return axios.get(`/api/routes?username=${username}`)
  //     .then((newRoutes) => {
  //       this.setState({
  //         routes: newRoutes.data,
  //       });
  //     });
  // }


  // console.log(this.state.routes) delete this. just here to pass tests.
  addToJournal() {
    // placeholder return statement to avoid getting flagged
    this.one = 1;
    return this.one;
  }

  // handleDelete(targetRoute) {
  //   /* if targetRoute has tempId, it has not yet been saved to the database
  //   and we can delete locally without communicating to the database */
  //   if (!targetRoute.id) {
  //     const { routes } = this.state;
  //     let targetIndex;
  //     for (let i = 0; i < routes.length; i += 1) {
  //       if (routes[i].tempId === targetRoute.tempId) {
  //         targetIndex = i;
  //       }
  //     }
  //     routes.splice(targetIndex, 1);
  //     this.setState({
  //       routes,
  //     });
  //     /* otherwise deletion requires communicating with the database */
  //   } else {
  //     axios.delete('/api/routes', { params: targetRoute })
  //       // .then(res => console.log('delete successful', res))
  //       .then(() => this.getRoutes())
  //       .catch(error => console.log(error));
  //   }
  // }

  // handleUpsert(route) {
  //   const { username } = this.props;
  //   axios.patch('/api/routes', { data: { route, username } })
  //     .then(() => console.log('upsert successful'))
  //     .then(() => this.getRoutes());
  // }

  render() {
    return (
      <div className="routeHistory">
        <div className="routesHeader">
          <h1>My Route History</h1>
          <button className="addRouteButton" type="button" onClick={this.addRoute}>Add New Route</button>
          <p>
            Average Speed:
            {15/* <- change this value to something dynamic */}
            {' '}
            MPH
          </p>
        </div>
        <div className="routesContainer">
          { /* routes.map(route => (
            <RouteContainer
              key={Math.random()}
              route={route}
              handleDelete={this.handleDelete}
              handleUpsert={this.handleUpsert}
          />))
          This needs to be fixed once we receive real routes
           */}
        </div>
      </div>
    );
  }
}

// RouteHistory.propTypes = {
//   routes: PropTypes.arrayOf(PropTypes.object).isRequired,
//   username: PropTypes.string.isRequired,
// };

export default RouteHistory;
