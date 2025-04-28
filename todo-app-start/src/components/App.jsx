import React, { useState } from "react";
import ToDoList from "./ToDoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  // const [removeText, setRemoveText]=useState("");

  // function removeValueTODo(event){
  //   let removeValueText=event.target.value;
  //   setRemoveText(removeValueText)

  // }
  // function removeToDo(){
  // setToDos((prevValue)=>prevValue.filter((todo)=>todo!==removeText));
  //   setRemoveText("");
  // }
  function handleChange(event) {
    let value = event.target.value;
    setInputText(value);
  }

  function addToDo() {
    setToDos((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  function deleteToDo(id) {
    setToDos((prevValue) => {
      return prevValue.filter((todo, index) => {
        return index !== id;
      });
    });
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

        {/* <input type="text" value={removeText} onChange={removeValueTODo} />
        <button onClick={removeToDo}> 
          <span>Remove</span>
        </button> */}
      </div>
      <div>
        <ul>
          {toDos.map((todo, index) => {
            return (
              <ToDoList
                deleteFunction={deleteToDo}
                key={index}
                id={index}
                text={todo}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
