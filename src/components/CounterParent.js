import React, { Component } from 'react';

import Counter from './Counter';

class CounterParent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
    this.reset = this.reset.bind(this);
  }

  increase(e) {
    let currentCount = this.state.count;

    if ( e.shiftKey && e.altKey ) {
      currentCount += 100;
    } else if ( e.shiftKey ) {
      currentCount += 10;
    } else {
      currentCount += 1;
    }
    
    this.setState({
      count: currentCount
    });
  }

  decrease(e) {
    let currentCount = this.state.count;

    if ( e.shiftKey && e.altKey ) {
      currentCount -= 100;
    } else if ( e.shiftKey ) {
      currentCount -= 10;
    } else {
      currentCount -= 1;
    }

    this.setState({
      count: currentCount
    });
  }

  reset(e) {
    this.setState({
      count: 0
    });
  }

  render() {

    const backgroundStyle = {
      padding: 50,
      backgroundColor: '#FFC53A',
      width: 250,
      height: 125,
      borderRadius: 10,
      textAlign: 'center'
    };

    const buttonStyle = {
      margin: 2,
      fontSize: '1em',
      width: 30,
      height: 30,
      fontFamily: 'sans-serif',
      color: '#333',
      fontWeight: 'bold',
      lineHeight: '3px'
    };

    const resetButtonStyle = {
      ...buttonStyle,
      width: 65,
      fontSize: 20,
     };

    return (
      <div style={ backgroundStyle }>
        <Counter display={ this.state.count } />
        <div>
          <button onClick={ this.decrease } style={ buttonStyle }>-</button>
          <button onClick={ this.increase } style={ buttonStyle }>+</button>
        </div>
        <div>
        <button onClick={ this.reset } style={ resetButtonStyle }>reset</button>
        </div>
      </div>
    );
  }
}

export default CounterParent;
