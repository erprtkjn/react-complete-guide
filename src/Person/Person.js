import React from 'react';

const person = (props) => {
return (
    <div>
        <p onClick={props.click}>I'm {props.name}. My age is {props.age}.</p>
        <p>{props.children}</p>
    </div>
)
};


export default person;

// export const person = () => {
//     return <p>I'm a person.</p>
// };
// 
// Below will be the import in App.js file
// import {person as Person} from "./Person/Person";