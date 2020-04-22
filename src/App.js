import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

state = {
  persons: [
    {name: "Prateek", age: "30"},
    {name: "Aakansha", age: "27"}
  ]
}

switchNameHandler = () => {
  this.setState({
    persons: [
      {name: "Prateek Jain", age: "30"},
      {name: "Aakansha", age: "28"}
    ] 
  })
}

  render() {
    return (
      <div className="App">
        <h1>Hi! This is React App</h1>
        <p>This is actually working!!!</p>
        <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age={this.state.persons[1].age}>
          My hobby is gin gin.
        </Person>
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
  }
}

export default App;