import React from 'react'

export default function 
button({description}) {
  return (
    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit">
        <button>{description}</button>
    </div>
  )
}
