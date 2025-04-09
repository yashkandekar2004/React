import React, { useState } from "react";

function ToDoList(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.text);

  function handleEditChange(event) {
    setEditText(event.target.value);
  }

  function saveEdit() {
    props.editFunction(props.id, editText);
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={editText} onChange={handleEditChange} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <li>{props.text}</li>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => props.deleteFunction(props.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default ToDoList;
