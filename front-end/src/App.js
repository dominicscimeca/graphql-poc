import React, {Component} from 'react';
import './App.css';
import UsersRelay from './UsersRelay'
import CarsApollo from './CarsApollo'
import { CompaniesComponent } from 'component-lib'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersRelay/>
        <CarsApollo/>
        <CompaniesComponent/>
      </div>
    );
  }
}

export default App;
