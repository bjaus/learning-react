import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//const heading = document.querySelector('#colorHeading');

class ColorLabel extends Component {
  render() {
    
    let color = this.props.color;
    color = `${ color.charAt(0).toUpperCase() }${ color.substr(1).toLowerCase() }`;

    return ReactDOM.createPortal(
      `: ${ color }`,
      heading
    );
  }
}

export default ColorLabel;
