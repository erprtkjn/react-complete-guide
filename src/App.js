import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi! This is React App</h1>
        <p>This is actually working!!!</p>
        <Person />
      </div>
    );
  }
}

export default App;
