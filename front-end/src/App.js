import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsersRelay from './UsersRelay'
import CompaniesRelay from './CompaniesRelay'
import CarsApollo from './CarsApollo'

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
        <UsersRelay/>
        <CompaniesRelay/>
        <CarsApollo/>
      </div>
    );
  }
}

export default App;
