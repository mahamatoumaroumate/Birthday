import Data from './Data'
import React, { useEffect, useState } from 'react'
import './index.css'
export const SetPeople = () => {
  const [data, setData] = useState(Data)
  const [num, setNum] = useState(0)
  console.log(data.length)
  return (
    <div className='container'>
      <h1>{data.length} Birthdays Today</h1>
      {data.map((person) => {
        const { id, image, age, name } = person
        return (
          <div className='person' key={id}>
            <img src={image} alt={name} className='img' />
            <div className='info'>
              <h2>{name}</h2>
              <span>{age} Years</span>
            </div>
          </div>
        )
      })}
      <button type='button' className='clear-btn' onClick={() => setData([])}>
        Clear All
      </button>
    </div>
  )
}
const Clear = () => {}
