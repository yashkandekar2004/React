import React, { useState } from "react";

function Time() {
  let currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  let getTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  setInterval(getTime, 1000); 

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default Time;
