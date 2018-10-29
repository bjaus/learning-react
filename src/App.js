import React, { Component } from 'react';
import './App.css';

import Colorizer from './components/Colorizer';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <Colorizer /> 
        </div>
      </div>
    );
  }
}

export default App;
