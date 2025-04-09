
import './App.css'

function App() {
const lineCss={textDecoration: 'line-through'}
let isDone = true
  return (
    <>
      <h1 style={isDone ? lineCss:null}>Milk</h1>
    </>
  )
}

export default App
