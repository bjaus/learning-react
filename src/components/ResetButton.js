import React, { Component } from 'react';

class PlusButton extends Component {
  render() {

    const buttonStyle = {
      margin: 2,
      fontSize: '1em',
      width: 65,
      height: 30,
      fontFamily: 'sans-serif',
      color: '#333',
      fontWeight: 'bold',
      lineHeight: '3px',
      fontSize: 20
    };

    return (
      <button onClick={ this.props.clickEvent }style={ buttonStyle }>
        reset
      </button>
    );
  }
}

export default PlusButton;
