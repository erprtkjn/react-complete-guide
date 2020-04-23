import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

state = {
  persons: [
    {name: "Prateek", age: "30"},
    {name: "Aakansha", age: "27"}
  ],
  stateShowPersons: false
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

togglePersonHandler = () => {
  const showPerson = this.state.stateShowPersons;
  this.setState(
    {stateShowPersons: !showPerson}
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

    return (
      <div className="App">
        <h1>Hi! This is React App</h1>
        <p>This is actually working!!!</p>
        { this.state.stateShowPersons ? 
          <div>
            <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person 
              name = {this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Prateek Jain')}
              changed={this.nameChangedHandler}>
                My hobby is gin gin.
            </Person>
          </div> : null
  }
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