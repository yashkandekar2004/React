import React from 'react'
import { useState } from 'react'
import Child from './Child'
import './App.css'
function Parent() {
    const [count, setCount] = useState(0)
  return (
    <div>
      <Child count={count} setCount={setCount} />

    </div>
  )
}

export default Parent
