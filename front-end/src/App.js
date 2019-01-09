import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users'
import UsersRelay from './UsersRelay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Users/>
        <UsersRelay/>
      </div>
    );
  }
}

export default App;
