import React from 'react'
import UseCustomeHook from './UseCustomeHook'
function App() {
  const { count, increment, decrement, reset } = UseCustomeHook();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
