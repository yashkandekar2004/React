import { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState({
    fName: "",
    lName: ""
  });

  let handleChange = (event) => {
    let targetName = event.target.name;
    let value = event.target.value;

    setName((prevState) => ({
      ...prevState,
      [targetName]: value
    }));
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      alert(`Login : ${name.fName} ${name.lName} `);
    }}>
      <h1>Form {name.fName} {name.lName}</h1>
      
      <input 
        name="fName" 
        value={name.fName} 
        onChange={handleChange} 
        placeholder="First Name"
      />      
      <input 
        name="lName" 
        value={name.lName} 
        onChange={handleChange} 
        placeholder="Last Name"
      /> 
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
