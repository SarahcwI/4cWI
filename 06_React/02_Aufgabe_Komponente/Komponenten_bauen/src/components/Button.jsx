import React from 'react'
import {useState} from 'react';

export default function 
Button({description}) {

    const[amountOfClicks, setAmountofClicks] = useState(0);
  return (
    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit">
        <div onClick={()=>{
            setAmountofClicks(amountOfClicks + 1);
        }}>
            <button>{description}</button>
            <div>Button clicked: {amountOfClicks}</div>
        </div>
    </div>
  )
}
