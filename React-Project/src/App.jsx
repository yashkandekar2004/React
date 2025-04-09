
import React, { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  // let counter = 0

  const addValue = () => {
    setCounter(counter + 1)
  }
  const removeValue = () => { 
    if (counter === 0) {
      return
    }
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value is : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
