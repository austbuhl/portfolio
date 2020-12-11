import React, { useState } from 'react'
import { NavBar } from './components/NavBar'
import './App.css'

function App() {
  const [currentTheme, setCurrentTheme] = useState('dark')

  const toggleTheme = (e) => {
    setCurrentTheme(e.target.id)
  }

  return (
    <div className={`App ${currentTheme}`}>
      <NavBar toggleTheme={toggleTheme} />
      <header>
        <img src='logo192.png' alt='profile pic' />
        <h1>MY NAME IS AUSTIN. </h1>
        <h2>HIRE ME!!</h2>
        <p>Please, I'm a good guy</p>
      </header>
    </div>
  )
}

export default App
