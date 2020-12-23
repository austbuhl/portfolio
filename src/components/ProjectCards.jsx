import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './ProjectCards.css'
import { NavLink } from 'react-router-dom'
import {
  makeStyles,
  Card,
  Divider,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Tooltip
} from '@material-ui/core/'
import GitHubIcon from '@material-ui/icons/GitHub'
import WebIcon from '@material-ui/icons/Web'
// import { GitHubIcon, WebIcon } from '@material-ui/icons'
import { animationTwo, transition } from '../animations/index'

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
    fontSize: '5rem',
    fontWeight: 700
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

      <Card className={classes.newCard}>
        {/* <CardHeader title='ProjectSocial' className={classes.title} /> */}

        <CardMedia
          className={classes.media}
          image='/PS/ProjectSocialHome.png'
          title='ProjectSocial'
        />
        <CardContent>
          <Divider />
          <NavLink to='/projects/1' style={{ textDecoration: 'none' }}>
            <Tooltip title='View Additional Detail' arrow placement='right'>
              <Typography variant='h5' component='span'>
                ProjectSocial
              </Typography>
            </Tooltip>
          </NavLink>
          <Typography variant='body2' color='textSecondary' component='p'>
            One sentence description..... or just the tech used?
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Tooltip title='View Source Code' arrow placement='right'>
            <IconButton aria-label='view source code'>
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='View Site' arrow placement='left'>
            <IconButton aria-label='view site'>
              <WebIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </motion.section>
  )
}
