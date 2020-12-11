import React from 'react'
import './NavBar.css'

export const NavBar = ({ toggleTheme, currentTheme }) => {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        <li className='nav-item'>Home</li>
        <li className='nav-item'>About</li>
        <li className='nav-item has-dropdown'>
          <a href='#'>Theme</a>
          <ul className='dropdown'>
            <li className='dropdown-item'>
              <a href='#' id='light' onClick={toggleTheme}>
                Light
              </a>
            </li>
            <li className='dropdown-item'>
              <a href='#' id='dark' onClick={toggleTheme}>
                Dark
              </a>
            </li>
            <li className='dropdown-item'>
              <a href='#' id='solar' onClick={toggleTheme}>
                Solarize
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
