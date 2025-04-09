import { useState } from "react";
import "./App.css";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Notes from "./Notes";
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <Header />
      <CreateNote addNoteFunction={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            deleteNoteFunction={deleteNote}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
