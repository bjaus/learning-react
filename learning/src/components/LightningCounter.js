import React, { Component } from 'react';

class LightningCounter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      strikes: 0
    };

    this.timerTick = this.timerTick.bind(this);
  }

  timerTick() {
    this.setState( (prevState) => {
      return {
        strikes: prevState.strikes + 100
      };
    })
  }

  componentDidMount() {
    setInterval( this.timerTick, 1000 );
  }

  render() {
    return (
      <h1>{ this.state.strikes }</h1>
    );
  }
}

export default LightningCounter;
