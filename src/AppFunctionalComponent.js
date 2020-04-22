import React, { useState } from "react";
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      {name: "prateek", age: 30},
      {name: "Aaku", age:27}
    ]
  });

  const [otherState, setOtherState] = useState('Other state value');

  console.log(personState, otherState)

const switchNameHandler = () => {
  setPersonState({
    persons: [
      {name: "Prateek Jain", age:30},
      {name: "Aaku", age:27}
    ]
  })
}

return(
  <div className='App'>
    <h1>Use State Demo</h1>
    <Person name={personState.persons[0].name} age={personState.persons[0].age}></Person>
    <Person name={personState.persons[1].name} age={personState.persons[1].age}>
      My Hobby is gin gin.
    </Person>
    <button onClick={switchNameHandler}>Switch Name</button>
  </div>
);

}

export default App;