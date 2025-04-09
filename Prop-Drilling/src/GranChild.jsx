import React from 'react'

function GranChild(props) {
  return (
    <div>
      <button onClick={()=>{props.setCount(prevCount => prevCount + 1)}}>Increment</button>
      <button onClick={()=>{props.setCount(prevCount => prevCount-1)}}>Decrement</button>
    </div>
  )
}

export default GranChild
