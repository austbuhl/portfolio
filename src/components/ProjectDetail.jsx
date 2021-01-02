import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './ProjectDetail.css'
import { motion } from 'framer-motion'
import { Grid, Typography } from '@material-ui/core'
import { animationThree, transition } from '../animations'

export const ProjectDetail = ({ project }) => {
  console.log(project)

  const renderImages = () => {
    return project.images.map((image) => (
      <div>
        <img className='project-image' src={image.url} />
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
