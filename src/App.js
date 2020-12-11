import React, { useState, useEffect } from 'react'
import { NavBar } from './components/NavBar'
import './App.css'

function App() {
  const [currentTheme, setCurrentTheme] = useState('dark')

  useEffect(() => {
    const theme = localStorage.getItem('theme')

    if (theme) {
      setCurrentTheme(theme)
    }
  }, [])

  const toggleTheme = async (e) => {
    const selectedTheme = e.target.id
    const solarBtn = document.querySelector('#solar')
    if (currentTheme.includes('solar') && selectedTheme === 'solar') {
      const updatedTheme = currentTheme.replace(' solar', '')
      solarBtn.innerText = 'Solarize'
      solarBtn.style.cssText = `
        --bg-solar: var(--yellow);
      `
      setCurrentTheme(updatedTheme)
      localStorage.setItem('theme', updatedTheme)
    } else if (!currentTheme.includes('solar') && selectedTheme === 'solar') {
      solarBtn.innerText = 'Normalize'
      solarBtn.style.cssText = `
        --bg-solar: white;
      `
      setCurrentTheme((current) => current + ' solar')
      localStorage.setItem('theme', currentTheme + ' solar')
    } else {
      setCurrentTheme(selectedTheme)
      localStorage.setItem('theme', selectedTheme)
    }
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
