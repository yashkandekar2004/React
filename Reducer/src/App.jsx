import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    case "set":
      return { count: action.value };
    case "multiply":
      return { count: state.count * action.value };
    case "divide":
      return { count: state.count / action.value };
    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useReducer(reducer, initialState);
  console.log("Redring App");
  console.log("Count: ", count.count);


  return (
    <>
      <h1>Count: {count.count}</h1>
      <button onClick={() => setCount({ type: "increment" })}>Increment</button>
      <button onClick={() => setCount({ type: "decrement" })}>Decrement</button>
      <button onClick={() => setCount({ type: "reset" })}>Reset</button>
      <button onClick={() => setCount({ type: "set", value: 10 })}>
        Set to 10
      </button>
      <button onClick={() => setCount({ type: "multiply", value: 2 })}>
        Multiply by 2
      </button>
      <button onClick={() => setCount({ type: "divide", value: 2 })}>
        Divide by 2
      </button>
    </>
  );
}

export default App;
