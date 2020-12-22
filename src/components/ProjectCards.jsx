import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './ProjectCards.css'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { animationTwo, transition } from '../animations/index'
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import WebIcon from '@material-ui/icons/Web'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  newCard: {
    boxShadow: '5px 5px 5px #0a131f',
    border: '0.5px solid #0a131f',
    borderRadius: 10,
    maxWidth: 345
  },
  title: {
    fontSize: 25
  }
}))

export const ProjectCards = ({ projects }) => {
  const classes = useStyles()

  const renderCards = () => {
    return projects.map((project) => (
      <NavLink key={project.id} to={`/projects/${project.id}`}>
        <div className='card'>
          <h1>{project.name}</h1>
          <button>{project.backend}</button>
          <button>{project.frontend}</button>
          <button>{project.url}</button>
        </div>
      </NavLink>
    ))
  }

  return (
    <motion.section
      initial='out'
      animate='in'
      exit='out'
      variants={animationTwo}
      transition={transition}
      className='column-center'
    >
      {renderCards()}
      <NavLink to='/projects/1' style={{ textDecoration: 'none' }}>
        <Card className={classes.newCard}>
          {/* <CardHeader title='ProjectSocial' className={classes.title} /> */}
          <CardMedia
            className={classes.media}
            image='/PS/ProjectSocialHome.png'
            title='ProjectSocial'
          />
          <CardContent>
            <Divider />
            <Typography variant='h5' component='h2'>
              ProjectSocial
            </Typography>

            <Typography variant='body2' color='textSecondary' component='p'>
              One sentence description..... or just the tech used?
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label='view source code'>
              <GitHubIcon />
            </IconButton>
            <IconButton aria-label='view site'>
              <WebIcon />
            </IconButton>
          </CardActions>
        </Card>
      </NavLink>
    </motion.section>
  )
}
