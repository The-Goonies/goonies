import React from 'react';
import ReactDOM from 'react-dom';
import MapYourRoute from '../presentational/MapYourRoute';
import Login from '../presentational/Login';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: '',
      id: 0,
    };
    this.transferUserInfo = this.transferUserInfo.bind(this);
  }


  transferUserInfo(userData) {
    this.setState({
      session: userData,
    });
  }

  checkSession() {
    const { session, id } = this.state;
    if (session) {
      return <MapYourRoute id={id} />;// dashboard
    }
    return <Login transferUserInfo={this.transferUserInfo} />;
  }

  render() {
    return (
      <div className="header">
        <h1 className="logo">Backpacker</h1>
        {this.checkSession()}
      </div>
    );
  }
}
const { document } = global;
ReactDOM.render(<AppContainer />, document.getElementById('app'));
