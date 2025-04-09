import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./App.css"

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addToDo() {
    setToDos((prevValue) => [...prevValue, inputText]);
    setInputText("");
  }

  function deleteToDo(id) {
    setToDos((prevValue) => prevValue.filter((_, index) => index !== id));
  }

  function editToDo(id, newValue) {
    setToDos((prevValue) =>
      prevValue.map((todo, index) => (index === id ? newValue : todo))
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addToDo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        
          {toDos.map((todo, index) => (
            <ToDoList
              key={index}
              id={index}
              text={todo}
              deleteFunction={deleteToDo}
              editFunction={editToDo}
            />
          ))}

        </ul>
      </div>
    </div>
  );
}

export default App;
