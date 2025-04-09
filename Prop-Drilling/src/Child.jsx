import React from 'react'
import GranChild from './GranChild'
function Child(props) {

  return (
    <div>
        <h1>{props.count}</h1>
        <GranChild setCount={props.setCount} />
    </div>
  )
}

export default Child
