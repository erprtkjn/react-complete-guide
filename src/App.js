import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid black;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }  
}
`;

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
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid black',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    let persons = null;

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

      // style.backgroundColor='red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi! This is React App</h1>
          <p className={classes.join(' ')}>This is actually working!!!</p>
          <StyledButton alt={this.state.stateShowPersons}
            onClick={this.togglePersonHandler}>Toggle Name
          </StyledButton>
          {persons}
        </div>
    );
  }
}

export default App;