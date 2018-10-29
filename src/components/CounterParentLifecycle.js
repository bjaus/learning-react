import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

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

    console.log('constructor: Default state time!');

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

  componentWillUpdate(newProps, newState) {
    console.log('componentWillUpdate: Component is about to update!');
  }

  componentDidUpdate(currentProps, currentState) {
    console.log('componentDidUpdate: Component just updated!');
  }

  componentWillMount() {
    console.log('componentWillMount: Component is about to mount!');
  }

  componentDidMount() {
    console.log('componentDidMount: Component just mounted!');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be removed from the DOM!');
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate: Shoudl component update?');

    if ( newState.count < 5 ) {
      console.log('shouldComponentUpdate: Component should update!');
      return true;
    } else {
//      ReactDOM.unmountComponentAtNode(destination);
      console.log('shouldComponentUpdate: Component should not update!');
      return false;
    }
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceieveProps: Component will get new props!');
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

console.log('defaultProps: Default prop time!');
CounterParent.defaultProps = {};

export default CounterParent;
