import React, { Component } from 'react';
import classes from './App.css';
import Person from "./Person/Person";


class App extends Component {

  state = {
    persons: [
      { id: 1, name: "Prateek", age: "30" },
      { id: 2, name: "Aakansha", age: "27" },
      { id: 3, name: 'Jain', age: "100" }
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

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  render() {

    let persons = null;
    // let btnClass = [classes.Button];prtk
    let btnClass = '';

    if(this.state.stateShowPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age} 
              key={person.id}
              click={this.deletePersonHandler.bind(this, index)}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      )

      btnClass = classes.Red;
      // btnClass.push(classes.Red);
      // style.backgroundColor='red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi! This is React App</h1>
          <p className={assignedClasses.join(' ')}>This is actually working!!!</p>
          <button className={btnClass}
            onClick={this.togglePersonHandler}>Toggle Name
          </button>
          {persons}
        </div>
    );
  }
}

export default App;