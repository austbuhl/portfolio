import React from 'react'
import { NavBar } from './components/NavBar'
import { motion } from 'framer-motion'
import { ProjectCard } from './components/ProjectCard'
import './App.css'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <main>
        <motion.h1
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4
              }
            }
          }}
        >
          CSS is Cool
        </motion.h1>
        <p>But is it though?</p>
        <ProjectCard />
      </main>
    </div>
  )
}

export default App
