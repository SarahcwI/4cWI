import React from 'react'

export default function PersonCard({name, titel, imageUri}) {
  return (
    <div>
        <div>
            <h2>{name}</h2>
            <h4>{titel}</h4>

        </div>
        <div>
            <img src={imageUri} alt='Person'/>  
        </div>
    </div>
  )
}
