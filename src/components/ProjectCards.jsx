import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { ProjectDetail } from './ProjectDetail'
import './ProjectCards.css'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import WebIcon from '@material-ui/icons/Web'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}))

export const ProjectCards = ({ projects }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)
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
    <section className='column-center'>
      {renderCards()}
      <NavLink to='/projects/1' style={{ textDecoration: 'none' }}>
        <Card className={classes.root}>
          <CardHeader
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title='ProjectSocial'
          />
          <CardMedia
            className={classes.media}
            image='/ProjectSocial.png'
            title='ProjectSocial'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
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
    </section>
  )
}
