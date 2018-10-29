import React, { Component } from 'react';
import './App.css';

import CounterParent from './components/CounterParent';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <CounterParent /> 
        </div>
      </div>
    );
  }
}

export default App;
