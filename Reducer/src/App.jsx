// import React, { useReducer } from "react";

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":`
//       return { count: state.count - 1 };
//     case "reset":
//       return initialState;
//     case "seAt":
//       return { count: action.value };
//     case "multiply":
//       return { count: state.count * action.value };
//     case "divide":
//       return { count: state.count / action.value };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [count, setCount] = useReducer(reducer, initialState);
//   console.log("Redring App");
//   console.log("Count: ", count.count);


//   return (
//     <>
//       <h1>Count: {count.count}</h1>
//       <button onClick={() => setCount({ type: "increment" })}>Increment</button>
//       <button onClick={() => setCount({ type: "decrement" })}>Decrement</button>
//       <button onClick={() => setCount({ type: "reset" })}>Reset</button>
//       <button onClick={() => setCount({ type: "set", value: 10 })}>
//         Set to 10
//       </button>
//       <button onClick={() => setCount({ type: "multiply", value: 2 })}>
//         Multiply by 2
//       </button>
//       <button onClick={() => setCount({ type: "divide", value: 2 })}>
//         Divide by 2
//       </button>
//     </>
//   );
// }

// export default App;



// Account Balance deposit and withdraw using hard coded values


// import React from 'react'
// import { useReducer } from 'react'
// function App() {
//  const [state, dispatch] = useReducer((state, action)=>
// {
//   return state + action;
// },0);
//   console.log("Redring App");
  
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={()=>dispatch(1)}>Increment</button>
//     </div>
//   )
// }

// export default App


// import React, { useReducer } from 'react'


// function reducer(state,action){
//   switch(action.type){
//     case 'deposit' : 
//       return {count: state.count + 50}
//     case 'withdraw' :
//       return {count: state.count - 20}
//       default:
//         throw new Error(); 
//   }
// }
// function App() {
//   const [state,setState]=useReducer(reducer,{count:0})
//   return (
//     <div >
//       <h1>Account Balance : {state.count}</h1>
//       <button onClick={()=>setState({type:'deposit'})}>Deposit 50 $</button>
//       <button onClick={()=>setState({type:'withdraw'})}>withdraw 20 $</button>
//     </div>
//   )
// }

// export default App



// Account Balance deposit and withdraw using payload

import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'deposit':
      return { count: state.count + action.payload };
    case 'withdraw':
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
}

function App() {
  const [state, setState] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Account Balance: ${state.count}</h1>
      <button onClick={() => setState({ type: 'deposit', payload: 50 })}>
        Deposit 50 $
      </button>
      <button onClick={() => setState({ type: 'withdraw', payload: 20 })}>
        Withdraw 20 $
      </button>
    </div>
  );
}

export default App;
