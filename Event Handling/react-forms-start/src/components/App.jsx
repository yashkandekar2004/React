import React, { useState } from "react";
 
function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [handleFname, sethandSetFname] = useState("");
  const [handleLname, sethandSetLname] = useState("");
  const [handleEmail, sethandSetEmail] = useState("");
 
  function f(event) {
    setFname(event.target.value)
  }
  function l(event) {
    setLname(event.target.value)
  }
  function e(event) {
    setEmail(event.target.value)
  }
 
  function handleClick(event) {
    event.preventDefault();
    sethandSetFname(fname);
    sethandSetLname(lname);
    sethandSetEmail(email);
  }
 
  return (
    <div className="container">
      <h1>
        Hello {handleFname} {handleLname} {handleEmail}
      </h1>
 
      <form onSubmit={handleClick}>
        <input
          onChange={f}
          name="fname"
          type="text"
          placeholder="What's your name?"
        />
        <input
          onChange={l}
          name="lname"
          type="text"
          placeholder="What's your surname?"
        />
        <p></p>
        <input
          onChange={e}
          name="email"
          type="text"
          placeholder="What's your email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
 
export default App;
 