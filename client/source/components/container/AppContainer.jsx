import React from 'react';
import ReactDOM from 'react-dom';

class AppContainer extends React.Component {
  constructor(props) {
    super (props)
  }

  render () {
    return (
      <div>
      <h1>Hello World</h1>
      </div>
    )
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('app'))