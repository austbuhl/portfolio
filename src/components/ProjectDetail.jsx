import React from 'react'
import { NavLink } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './ProjectDetail.css'
import { motion } from 'framer-motion'
import { Grid, Typography, IconButton, Tooltip } from '@material-ui/core'
import { animationThree, transition } from '../animations'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

export const ProjectDetail = ({ project }) => {
  const prevProjectId = Math.max(1, project.id - 1)
  const nextProjectId = Math.min(7, project.id + 1)

  const renderImages = () => {
    return project.images.map((image) => (
      <div>
        <img className='project-image' src={`.${image.url}`} />
        <p className='legend'>{image.desc}</p>
      </div>
    ))
  }

  return (
    <motion.div
      initial='out'
      animate='end'
      exit='out'
      variants={animationThree}
      transition={transition}
      className='project-detail'
    >
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <Typography component='h3' variant='h4'>
            <strong>{project.name}</strong>
          </Typography>
          <Carousel id='image-carousel' dynamicHeight={true} showArrows={true}>
            {renderImages()}
          </Carousel>

          <div className='project-links'>
            {project.id !== 1 && (
              <NavLink to={`/portfolio/projects/${prevProjectId}`}>
                <Tooltip title='View Previous'>
                  <IconButton aria-label='back'>
                    <ArrowBackIosIcon />
                  </IconButton>
                </Tooltip>
              </NavLink>
            )}

            <a href={project.frontend} target='_blank'>
              FrontEnd
            </a>

            {project.backend !== '' && (
              <a href={project.backend} target='_blank'>
                {' | '}BackEnd
              </a>
            )}

            {project.url !== '' && (
              <a href={project.url} target='_blank'>
                {' | '}Site
              </a>
            )}

            {project.id !== 7 && (
              <NavLink to={`/portfolio/projects/${nextProjectId}`}>
                <Tooltip title='View Next'>
                  <IconButton aria-label='next'>
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Tooltip>
              </NavLink>
            )}
          </div>
        </Grid>

        <Grid item sm={12} md={6}>
          <br />
          <h3>Built With</h3>
          <p>
            {`${project.stack.frontend.join(
              ', '
            )}, ${project.stack.backend.join(', ')}`}
          </p>
          <br />
          <h3>Description</h3>
          <div dangerouslySetInnerHTML={{ __html: project.description }}></div>
        </Grid>
      </Grid>
    </motion.div>
  )
}
