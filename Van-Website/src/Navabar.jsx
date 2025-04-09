import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div className="vanlife-layout">
      <header className="vanlife-navbar">
        <div className="vanlife-logo">#VANLIFE</div>
        <ul className="vanlife-links">
          <Link to="/">Vans</Link>
          <Link to="/about">About</Link>
        </ul>
      </header>

      <main className="vanlife-main">
        <Outlet />
      </main>

      <footer className="vanlife-footer">© 2025 #VANLIFE</footer>
    </div>
  )
}

export default Navbar
