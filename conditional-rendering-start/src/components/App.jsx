import React from "react";
import Form from "./Form";
import Form1 from "./Form1";
function App() {
  let isLoggedIn = true;
// let currentHour = new Date(2025, 1, 12 , 20).getHours();
let isRegistered = false;

  return (
    <div className="container">
      {/* {isLoggedIn ? <h1>Hello</h1> : <Form />} */}
      {isRegistered ? <Form /> : <Form1 />}
      {/* {currentHour > 19 &&<h1>Why are you still working?</h1>} */}
    </div>
  )
}

export default App;
