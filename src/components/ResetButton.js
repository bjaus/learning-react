import React, { Component } from 'react';

class PlusButton extends Component {
  render() {

    const buttonStyle = {
      margin: 2,
      fontSize: 20,
      width: 65,
      height: 30,
      fontFamily: 'sans-serif',
      color: '#333',
      fontWeight: 'bold',
      lineHeight: '3px',
    };

    return (
      <button onClick={ this.props.clickEvent }style={ buttonStyle }>
        reset
      </button>
    );
  }
}

export default PlusButton;
