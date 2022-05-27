import React from 'react'
import NavBarStyles from './css/NavBar.module.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <nav id={NavBarStyles.navBar}>
        <div id={NavBarStyles.navBrand}>React Basics</div>
        <div id={NavBarStyles.navLinksContainer}>
          <Link to="/" className={NavBarStyles.navLinks}>
            <span className={NavBarStyles.navLinksText}>Home</span>
          </Link>
          <Link to="/scoreboard" className={NavBarStyles.navLinks}>
            <span className={NavBarStyles.navLinksText}>Scoreboard</span>
          </Link>
          <Link to="/cards" className={NavBarStyles.navLinks}>
            <span className={NavBarStyles.navLinksText}>Cards</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

// css module used.
// Links used for navigation.
