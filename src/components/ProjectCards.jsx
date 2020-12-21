import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { ProjectDetail } from './ProjectDetail'
import './ProjectCards.css'
import { NavLink } from 'react-router-dom'

export const ProjectCards = ({ projects }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  const renderCards = () => {
    return projects.map((project) => (
      <NavLink to={`/projects/${project.id}`}>
        <div className='card' key={project.id}>
          <h1>{project.name}</h1>
          <button>{project.backend}</button>
          <button>{project.frontend}</button>
          <button>{project.url}</button>
        </div>
      </NavLink>
    ))
  }

  return (
    <section class='column-center'>
      {/* <NavLink to='/projects/1'>
        <div className='card' onClick={toggleOpen}>
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
          <AnimatePresence>{isOpen && <ProjectDetail />}</AnimatePresence>
        </div>
      </NavLink> */}
      {renderCards()}
    </section>
  )
}
