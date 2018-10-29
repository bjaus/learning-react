import React, { Component } from 'react';

import LightningCounter from './LightningCounter';

class LightningCounterDisplay extends Component {
  render() {

    const commonStyle = {
      margin: 0,
      padding: 0
    }

    const divStyle = {
      width: 500,
      textAlign: 'center',
      backgroundColor: 'black',
      padding: 40,
      fontFamily: 'sans-serif',
      color: '#999',
      borderRadius: 10
    }

    const textStyles = {
      emphasis: {
        fontSize: 38,
        textTransform: 'uppercase',
        ...commonStyle
      },
      smallEmphasis: {
        textTransform: 'uppercase',
        ...commonStyle
      },
      small: {
        fontSize: 17,
        opacity: 0.5,
        ...commonStyle
      }
    };

    return (
      <div style={ divStyle }>
        <LightningCounter />
        <h2 style={ textStyles.emphasis }>lightning strikes</h2>
        <h2 style={ textStyles.smallEmphasis }>worldwide</h2>
        <p style={ textStyles.small }>(since you loaded this example)</p>
      </div>
    );
  }
}

export default LightningCounterDisplay;
