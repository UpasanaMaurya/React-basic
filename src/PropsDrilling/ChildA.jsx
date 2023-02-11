import React from 'react'
import ChildB from './ChildB'

const ChildA = ({name}) => {
  return (
      <div>
          <h1>I am ChildA</h1>
          <ChildB name={name}/>
    </div>
  )
}

export default ChildA