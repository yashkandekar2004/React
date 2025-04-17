// import React, { useEffect, useState } from 'react'

// function App() {
//   const [count,setCount]=useState(0);

//   useEffect(()=>{
//     console.log("Mounted :"+ count);
//     return(()=>{  
//       console.log("Unmounted :"+ count);
//     })
//   }, [count])
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>{setCount(prevCount => prevCount+1)}}>+</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react';
// import Message from './Message';

// function App() {
//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       {show ? (
//         <>
//           <Message />
//           <button onClick={() => setShow(false)}>Hide Message</button>
//         </>
//       ) : (
//         <button onClick={() => setShow(true)}>Show Message</button>
//       )}
//     </div>
//   );
// }

// export default App;



import React from 'react'
import { useState } from 'react';
import Message from './Message';
function App() {
  const[show,setShow]=useState(true);
  function handleChange(){
    setShow(prevVal => !prevVal);
  }
  return (
    <div>
      <button onClick={handleChange}>{show ? 'Hide':'Show'} Message</button>
      {show && <Message />}
    </div>
  )
}

export default App
