import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NumberKeyboard from './Components/NumberKeyboard'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="calc-row">
            <NumberKeyboard/>
          </div>
      </div>
    );
  }
}

export default App;
