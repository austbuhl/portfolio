import React from 'react'
import { FaReact } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {
  SiPostgresql,
  SiRails,
  SiRedux,
  SiJavascript,
  SiGooglemaps,
  SiMaterialUi
} from 'react-icons/si'
import './ProjectDetail.css'
import { motion } from 'framer-motion'
import { Grid } from '@material-ui/core'
import { animationThree, transition } from '../animations'

export const ProjectDetail = ({ project }) => {
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
          <h1>{project.name}</h1>

          <Carousel id='image-carousel' dynamicHeight={true} showArrows={true}>
            {renderImages()}
          </Carousel>
        </Grid>

        <Grid item sm={12} md={6}>
          <h4>Built With</h4>
          <p>{project.stack}</p>
          <br />
          <h4>FrontEnd</h4>
          <FaReact style={{ height: '1.5em', width: '1.5em' }} />
          <SiRedux style={{ height: '1.5em', width: '1.5em' }} />
          <SiJavascript style={{ height: '1.5em', width: '1.5em' }} />
          <SiGooglemaps style={{ height: '1.5em', width: '1.5em' }} />
          <SiMaterialUi style={{ height: '1.5em', width: '1.5em' }} />
          <h4>BackEnd</h4>
          <SiPostgresql style={{ height: '1.5em', width: '1.5em' }} />
          <SiRails style={{ height: '1.5em', width: '1.5em' }} />
          <h4>Description</h4>
          <div dangerouslySetInnerHTML={{ __html: project.description }}></div>
        </Grid>
      </Grid>
    </motion.div>
  )
}
