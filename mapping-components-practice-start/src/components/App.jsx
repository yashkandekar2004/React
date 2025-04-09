import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";
import Heading from "./Heading";
function App() {

return (
  <>
    <Heading />
    <div className="dictionary">
    {emojipedia.map((emoji, index) => {
      return (
        <Card
          key={index}
          emoji={emoji.emoji}
          name={emoji.name}
          meaning={emoji.meaning}
        />
      );
    })}
  </div>
  </>
)
  
}

export default App;
