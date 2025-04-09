// import React, { useState } from "react";

function ToDoList(props) {
//   const [isDone, setIsDone] = useState(false);

//   function handleClick() {
//     setIsDone((prevValue) => !prevValue);
//   }

  return (
    <div onClick={() => {props.deleteFunction(props.id)}}>
      <li>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoList;
