import "./App.css";
// import { useEffect, useState } from "react";

// function App() {
//   const [startData, setData] = useState(null);
//   const [count, setCount] = useState(1);
//   let obj = {
//     name: "Yash",
//   };
//   useEffect(() => {
//     console.log("Use Effect");

//     fetch(`https://swapi.dev/api/people/${count}`)
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, [count]);
//   let add=()=>{
//     setCount(preCount=>preCount+1) 
//   }
//   console.log("Start Data", startData);

//   return (
//     <>
//     <h1>{count} <button onClick={add} >Fetch Next</button></h1>
    
//       <h1>Fetch API</h1>
//       <pre>{JSON.stringify(obj, null, 2)}</pre>
//       <pre>{JSON.stringify(startData, null, 2)}</pre>
//     </>
//   );
// }

// export default App;
import { useEffect, useState } from "react";

function App() {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [userId]);

  return (
    <div>
      <button onClick={() => setUserId(userId + 1)}>Next User</button>
      <p>{userData ? userData.name : "Loading..."}</p>
    </div>
  );
}

export default App;
