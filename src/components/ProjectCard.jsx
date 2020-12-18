import React from 'react'
import { motion } from 'framer-motion'
import './ProjectCard.css'

export const ProjectCard = () => {
  return (
    <section class='column-center'>
      <div className='card'>
        <h1>ProjectSocial</h1>
        <motion.button
          whileHover={{
            scale: 1.25,
            transition: {
              duration: 0.2
            }
          }}
        >
          BackEnd
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.25,
            transition: {
              duration: 0.2
            }
          }}
        >
          FrontEnd
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.25,
            transition: {
              duration: 0.2
            }
          }}
        >
          Site
        </motion.button>
      </div>
      <div className='card'>Project 2</div>
      <div className='card'>Project 3</div>
      <div className='card'>Project 4</div>
      <div className='card'>Project 5</div>
      <div className='card'>Project 5</div>
      <div className='card'>Project 5</div>
    </section>
  )
}
