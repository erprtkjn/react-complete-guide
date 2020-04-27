import React from 'react';
import './Person.css';
import Radium from "radium";

const person = (props) => {
return (
    <div className='Person'>
        <p onClick={props.click}>I'm {props.name}. My age is {props.age}.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
)
};


export default Radium(person);

// export const person = () => {
//     return <p>I'm a person.</p>
// };
// 
// Below will be the import in App.js file
// import {person as Person} from "./Person/Person";