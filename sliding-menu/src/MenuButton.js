import React, { PureComponent } from 'react';
import './MenuButton.css';

//class MenuButton extends Component {
//  Based on React.Component
//  shouldComponentUpdate(nextProps, nextState) {
//    if ( nextProps.handleMouseDown === this.props.handleMouseDown ) {
//      return false;
//    } else {
//      return true;
//    }
//  }

class MenuButton extends PureComponent {
  render() {
    console.log('Rendering: MenuButton');
    return (
      <button 
        id="roundButton" 
        onMouseDown={ this.props.handleMouseDown }
      ></button>
    );
  }
}

export default MenuButton;
