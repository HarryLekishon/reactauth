import React from 'react'
import "./home.css"
function NavB() {
  return (
<>
      <nav className="navbar">
        <div className="container">
            <div className="logo">Golden Life Foundation</div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/contact">Contact us</a></li>
                <li><a href="/gallery">Gallery</a></li>
            </ul>
        </div>
    </nav>
    </>    
  )
}

export default NavB
