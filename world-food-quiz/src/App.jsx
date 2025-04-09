import { useState,useEffect } from 'react'

import './App.css'

function App() {
const [food, setFood] = useState([]);

useEffect(() => {
  fetch('http://localhost:5000/Food')
    .then(response => response.json())
    .then(data => setFood(data))
    .catch(error => console.error('Error fetching food data:', error));
}
, [])

  return (
    <>


    <h1></h1>
    
    </>
  )

}

export default App
