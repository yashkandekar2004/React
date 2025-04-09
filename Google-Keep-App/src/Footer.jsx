import React from 'react'

function Footer() {
    let currentYear = new Date().getFullYear()
  return (
    <div>
      <footer>
        <p>Copyright &copy; {currentYear} </p>
      </footer>
    </div>
  )
}

export default Footer
