import { Routes, Route } from 'react-router-dom'
import Navbar from './Navabar'
import Home from './Home'
import About from './About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
