import "./App.css";
import React, { useState } from "react";
import Time from "./Time";

function App() {
  const [count, setCount] = useState(0);

  let addValue = () => {
    setCount(count + 1);
  };
  let removeVAlue = () => {
    if(count === 0){
      return
    }
    setCount(count - 1);
  };

  let restValue = () => {
    setCount(0)
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={addValue}>Add Value</button><br />
      <button onClick={removeVAlue}>Remove Value</button><br />
      <button onClick={restValue}>Reset</button><br />


      <Time />
    </>
  );
}

export default App;
