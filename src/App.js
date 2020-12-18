import React from 'react'
import { NavBar } from './components/NavBar'
import { ProjectCard } from './components/ProjectCard'
import './App.css'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <main>
        <h1>CSS is Cool</h1>
        <p>But is it though?</p>
        <ProjectCard />
      </main>
    </div>
  )
}

export default App
