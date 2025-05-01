import React, { useEffect } from 'react'
import PersonCard from './PersonCard'
import { useState } from 'react';

export default function PeopleContainer() {

const [people, setPeople] = useState([]);
const [color, setColor] = useState("green");

    useEffect(() => {
      fetch("https://67b84587699a8a7baef35d80.mockapi.io/person").then(
        (res) => res.json().then((data) => {
        setPeople(data);
      })
    );
    }, []);
  
    useEffect(() => {
      alert("Changed color to " + color);
    }, [color]);

  
  return (
    <div>
        <h1>People</h1>
        <button onClick={()=>(setColor("orange"))}>Change Color</button>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
            {people.map(person => {
              return <PersonCard name={person.name} titel={person.jobtitel} imageUri={person.avatar}/>
              
            })}
        </div>
    </div>
  )
}

