import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { motion } from 'framer-motion'
import { ProjectCards } from './components/ProjectCards'
import { ProjectDetail } from './components/ProjectDetail'
import projects from './projects.json'
import './App.css'

function App() {
  return (
    <Switch>
      <div className='App'>
        <NavBar />

        <Route
          exact
          path='/projects/:id'
          render={({ match }) => {
            const projectId = parseInt(match.params.id)
            const project = projects.find((proj) => proj.id === projectId)
            return <ProjectDetail project={project} />
          }}
        />
        <Route exact path='/projects'>
          <ProjectCards projects={projects} />
        </Route>
        <Route exact path='/'>
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
            <NavLink to='/projects'>View Projects</NavLink>
          </main>
        </Route>
      </div>
    </Switch>
  )
}

export default App
