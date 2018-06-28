import React, { Component } from 'react';
import Board from './Board';
import logo from '../images/logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Board />
      </div>
    );
  }
}

export default App;
