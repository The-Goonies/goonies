import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    }
  }

  render() {
    var menuDisplay;
    if (!this.state.showMenu) {
      menuDisplay = (
        null
      )
    } else {
      menuDisplay = (
        <p>hi</p>
      )
    }
    return (
      <div>
        <button>MENU</button>
        {menuDisplay}
      </div>
    )
  }

}

export default Menu;
