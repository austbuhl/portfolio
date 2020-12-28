import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCards } from './components/ProjectCards'
import { ProjectDetail } from './components/ProjectDetail'
import projects from './projects.json'
import { Paper, Container, Button } from '@material-ui/core'
import { animationOne, transition } from './animations/index'
import './App.css'

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <div className='App'>
          <NavBar />
          <Container>
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
                <Paper style={{ width: '50vw' }}>
                  <h1>Austin Buhler</h1>
                  <p>
                    A full stack developer with experience in React, JS & Ruby
                    on Rails
                  </p>

                  <NavLink to='/projects'>
                    <Button color='primary'>View Projects</Button>
                  </NavLink>
                </Paper>
              </motion.main>
            </Route>
          </Container>
        </div>
      </Switch>
    </AnimatePresence>
  )
}

export default App
