import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    persons: [
      { name: "Prateek", age: "30" },
      { name: "Aakansha", age: "27" }
    ],
    stateShowPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "30" },
        { name: "Aakansha", age: "28" }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Prateek", age: 30 },
        { name: event.target.value, age: 27 }
      ]
    })
  }

  togglePersonHandler = () => {
    const showPerson = this.state.stateShowPersons;
    this.setState(
      { stateShowPersons: !showPerson }
    );

  }


  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.stateShowPersons){
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi! This is React App</h1>
        <p>This is actually working!!!</p>
        {persons};
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Prateek!')}>Switch Name
        </button>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Name
        </button>
      </div>
    );
  }
}

export default App;