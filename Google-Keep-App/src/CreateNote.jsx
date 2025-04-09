import React, { useState } from "react";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function addNotes(event) {
    props.addNoteFunction(note);
    event.preventDefault();

    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          placeholder="Take a note..."
          rows="3"
          name="content"
          value={note.content}
          onChange={handleChange}
        />
        <button onClick={addNotes}>➕</button>
      </form>
    </div>
  );
}

export default CreateNote;
