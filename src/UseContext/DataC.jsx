import React from 'react'
import { useContext } from 'react'
import {data,data1,data2}from './MainContext'
const DataC = () => {
 
  const upasana = useContext(data)
  const dressColor=useContext(data1)
  const degree = useContext(data2)
  return(
    <div>
      <h1>I am  { upasana.name } and My Favorite Color { dressColor} and My quilificatin is {degree}</h1>
    </div>
  )
}

export default DataC