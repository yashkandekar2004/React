// import React, { useRef, useState } from 'react'

// function App() {
//   const [count, setCount]=useState(0);
//   console.log('Render');

//   const countRef=useRef(0);
//   let countVar=0;
// console.log('Count:',count);
// console.log('CountRef:',countRef.current);
// console.log('CountVar:',countVar);

//   const handleChange=()=>{
//     setCount(prevalue => prevalue+1);
//     countRef.current=countRef.current+1;
//   }
//   const handleChangeRef=()=>{

//     countRef.current=countRef.current+1;
//   }
//   const changeVar=()=>{
//     countVar=countVar+1;
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleChange}>Increment</button>
//       <button onClick={handleChangeRef}>IncrementRef</button>
//       <button onClick={changeVar}>Incremnet countVar</button>
//     </div>
//   )
// }

// export default App

import React, { useRef } from "react";

function App() {
  const headerRef = useRef();
  function changeColor() {
    headerRef.current.style.color = "red";
  }
  return (
    <div>
      <h1 ref={headerRef}>Hello</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default App;
