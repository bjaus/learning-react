import React, { Component } from 'react';

import './Colorizer.css';

//import ColorLabel from './ColorLabel';

class Colorizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
      bgColor: 'blue'
    };

//    this.colorValue = this.colorValue.bind(this);
//    this.setNewColor = this.setNewColor.bind(this);
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

    this.input.focus();
    this.input.value = '';

    e.preventDefault();
  }

  render() {

    const squareStyle = {
      backgroundColor: this.state.bgColor
    };

    return (
      <div className="colorArea">
        <div style={ squareStyle } className="colorSquare"></div>
        <form onSubmit={ (e) => this.setNewColor(e) }>
          <input 
            onChange={ (e) => this.colorValue(e) } 
            placeholder='Enter a color value'
            ref={ (element) => this.input = element }></input>
          <button type='submit'>go</button>
        </form>
      </div>
    );
  }
}

export default Colorizer;
