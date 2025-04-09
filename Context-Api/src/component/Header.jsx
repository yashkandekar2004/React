import React, { useContext } from 'react'
import { countContext } from '../Parent'
import './Header.css' // External CSS for styling

function Header() {
  const { count } = useContext(countContext)

  return (
    <header className="navbar">
      <div className="logo">Flipkart</div>

      <input className="search" type="text" placeholder="Search for products, brands and more" />

      <div className="nav-links">
        <span className="login">Login</span>
        <span className="cart">🛒 Cart ({count})</span>
      </div>
    </header>
  )
}

export default Header
