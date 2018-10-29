import React, { Component } from 'react';

import Square from './Square';
import Label from './Label';

class Card extends Component {
  render() {
    const cardStyle = {
      height: 200,
      width: 150,
      padding: 0,
      backgroundColor: '#FFF',
      boxShadow: '0px 0px 5px #666',
      display: 'inline-block',
      margin: 3
    }

    return (
      <div style={ cardStyle }>
        <Square { ...this.props } />
        <Label { ...this.props } />
      </div>
    );
  }
}

export default Card;
