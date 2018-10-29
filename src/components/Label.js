import React, { Component } from 'react';

class Label extends Component {
  render() {
    const labelStyle = {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      padding: 13,
      margin: 0,
      color: 'black'
    }

    function capColor(color) {
      if ( color.charAt(0) === '#' ) {
        return color.toUpperCase()
      }
      return `${ color.charAt(0).toUpperCase() }${ color.substr(1).toLowerCase() }`
    }

    return (
      <p style={ labelStyle }>
        { capColor( this.props.color ) } 
      </p>
    );
  }
}

export default Label;
