import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi! This is React App</h1>
        <p>This is actually working!!!</p>
        <Person name = "Prateek" age="30"/>
        <Person name = "Aakansha" age="27">
          My hobby is gin gin.
        </Person>
      </div>
    );
  }
}

export default App;
