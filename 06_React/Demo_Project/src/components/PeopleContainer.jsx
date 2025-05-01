import React, { useEffect } from 'react'
import PersonCard from './PersonCard'
import { useState } from 'react';

export default function PeopleContainer() {

const [people, setPeople] = useState([]);
    useEffect(() => {
      fetch("https://67b84587699a8a7baef35d80.mockapi.io/person").then(
        (res) => res.json().then((data) => {
        setPeople(data);
      })
    );
    }, []);
  

  
  return (
    <div>
        <h1>People</h1>
        <div className='w-40'>
            {people.map(element => {
              return <div>{element.name}</div>
              
            })}
        </div>
    </div>
  )
}

