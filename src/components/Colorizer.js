import React, { Component } from 'react';

import './Colorizer.css';

class Colorizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
      bgColor: 'white'
    };

    this.colorValue = this.colorValue.bind(this);
    this.setNewColor = this.setNewColor.bind(this);
  }

  colorValue(e) {
    this.setState({
      color: e.target.value
    });
  }

  setNewColor(e) {
    this.setState({
      bgColor: this.state.color
    });
  }

  render() {

    const squareStyle = {
      backgroundColor: this.state.bgColor
    };

    return (
      <div className="colorArea">
        <div style={ squareStyle } className="colorSquare"></div>

        <form onSubmit={ this.setNewColor }>
          <input onChange={ this.colorValue } placeholder='Enter a color value'></input>
          <button type='submit'>go</button>
        </form>
      </div>
    );
  }
}

export default Colorizer;
