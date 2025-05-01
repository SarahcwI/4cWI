import React, { useEffect } from 'react'
import PersonCard from './PersonCard'

export default function PeopleContainer() {

    useEffect(() => {
      fetch("https://67b84587699a8a7baef35d80.mockapi.io/person").then(
        (res) => res.json().then((data) => {
        console.log(data);
      })
    );
    }, []);
  

  
  return (
    <div className='w-40'>
        <h1>People</h1>
        <PersonCard name="Hans" titel="ceo" imageUri="https://picsum.photos/200/300"/>
        <PersonCard name="Hans" titel="ceo" imageUri="https://picsum.photos/200/300"/>
        <PersonCard name="Hans" titel="ceo" imageUri="https://picsum.photos/200/300"/>
    </div>
  )
}

