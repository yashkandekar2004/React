import React from "react";
import { useEffect } from "react";
function Message() {
  useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("Unmounted");
    };
  }, []); 

  return (
    <div>
      <h1>Message</h1>
    </div>
  );
}

export default Message;
