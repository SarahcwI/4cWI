import React from 'react'
import PersonCard from './PersonCard'

export default function PeopleContainer() {
  return (
    <div className='w-40'>
        <h1>People</h1>
        <PersonCard name="Hans" titel="ceo" imageUri="https://picsum.photos/200/300"/>
    </div>
  )
}
