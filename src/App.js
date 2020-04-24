import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    persons: [
      { id: 1, name: "Prateek", age: "30" },
      { id: 2, name: "Aakansha", age: "27" }
    ],
    stateShowPersons: false
  }

  togglePersonHandler = () => {
    const showPerson = this.state.stateShowPersons;
    this.setState(
      { stateShowPersons: !showPerson }
    );
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age} 
              click={this.deletePersonHandler.bind(this, index)}
              key={person.id}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi! This is React App</h1>
        <p>This is actually working!!!</p>
        {persons}
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Name
        </button>
      </div>
    );
  }
}

export default App;