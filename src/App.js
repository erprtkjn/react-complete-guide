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

switchNameHandler = (newName) => {
  this.setState({
    persons: [
      {name: newName, age: "30"},
      {name: "Aakansha", age: "28"}
    ] 
  })
}

nameChangedHandler = (event) => {
  this.setState({
    persons: [
      {name: "Prateek", age: 30},
      {name: event.target.value, age: 27}
    ]
  })
}

  render() {
    return (
      <div className="App">
        <h1>Hi! This is React App</h1>
        <p>This is actually working!!!</p>
        <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person 
          name = {this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Prateek Jain')}
          changed={this.nameChangedHandler}>
            My hobby is gin gin.
        </Person>
        <button onClick={this.switchNameHandler.bind(this, 'Prateek!')}>Switch Name</button>
      </div>
    );
  }
}

export default App;