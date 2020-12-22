import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCards } from './components/ProjectCards'
import { ProjectDetail } from './components/ProjectDetail'
import projects from './projects.json'
import { Container } from '@material-ui/core'
import { animationOne, transition } from './animations/index'
import './App.css'

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <div className='App'>
          <NavBar />
          <Container id='main-container'>
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
              <motion.main
                initial='out'
                animate='end'
                exit='out'
                variants={animationOne}
                transition={transition}
              >
                <h1>CSS is Cool</h1>
                <p>But is it though?</p>
                <NavLink to='/projects'>View Projects</NavLink>
              </motion.main>
            </Route>
          </Container>
        </div>
      </Switch>
    </AnimatePresence>
  )
}

export default App
