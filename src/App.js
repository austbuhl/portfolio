import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCards } from './components/ProjectCards'
import { ProjectDetail } from './components/ProjectDetail'
import projects from './projects.json'
import {
  makeStyles,
  Paper,
  Container,
  Grid,
  Avatar,
  Button,
  Typography
} from '@material-ui/core'
import { animationOne, transition } from './animations/index'
import './App.css'

const useStyles = makeStyles((theme) => ({
  card: {
    width: '55vw',
    marginTop: '5rem',
    boxShadow: '10px 10px 10px #0a131f',
    border: '1.25px solid #0a131f',
    padding: '1rem'
  },
  image: {
    width: theme.spacing(25),
    height: theme.spacing(25)
  }
}))

function App() {
  const classes = useStyles()
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
                <Paper className={classes.card}>
                  <Typography variant='h1' component='h1'>
                    <strong>Austin Buhler</strong>
                  </Typography>

                  <Typography variant='h4' style={{ marginTop: '1rem' }}>
                    <strong>Software Engineer</strong>
                  </Typography>
                  <div>
                    <a href='mailto:austinbuhler@gmail.com'>
                      <span>austinbuhler@gmail.com</span>
                    </a>
                    <a href='https://github.com/austbuhl' target='_blank'>
                      <span> | @austbuhl</span>
                    </a>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Pariatur illo eligendi, provident officiis ipsa tenetur
                      accusamus possimus facilis itaque ab nostrum debitis
                      quidem hic qui enim molestiae laudantium consequuntur
                      quod? Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Doloremque, animi obcaecati recusandae fuga debitis
                      esse consectetur blanditiis! Incidunt quas corporis quia
                      nostrum iusto. Quam dolorum, aut ratione molestias vitae
                      veniam!
                    </p>
                  </div>
                  <NavLink to='/projects'>
                    <Button
                      color='primary'
                      style={{ marginTop: '1rem', fontSize: '1.5rem' }}
                    >
                      View Projects
                    </Button>
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
