import React, { Component } from 'react';

import Counter from './Counter';
import PlusButton from './PlusButton';
import MinusButton from './MinusButton';
import ResetButton from './ResetButton';

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

    return (
      <div style={ backgroundStyle }>
        <Counter display={ this.state.count } />
        <div>
          <MinusButton clickEvent={ this.decrease } />
          <PlusButton clickEvent={ this.increase } />
        </div>
        <ResetButton clickEvent={ this.reset } />
      </div>
    );
  }
}

export default CounterParent;
