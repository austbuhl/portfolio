import React, { useState } from 'react'
import { Box, Image, Badge, Link, ExternalLinkIcon } from '@chakra-ui/react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { ProjectDetail } from './ProjectDetail'
import './ProjectCard.css'

export const ProjectCard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4
  }

  return (
    <AnimateSharedLayout>
      <section class='column-center'>
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
        <div className='card'>Project 2</div>

        <Box maxW='sm' borderWidth='3px' borderRadius='lg' overflow='hidden'>
          <Image src={property.imageUrl} alt={property.imageAlt} />
          <Box p='6'>
            <Box d='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                New
              </Badge>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
              >
                {property.beds} beds &bull; {property.baths} baths
              </Box>
            </Box>

            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              ProjectSocial
            </Box>

            <Box>
              {property.formattedPrice}
              <Box as='span' color='gray.600' fontSize='sm'>
                / wk
              </Box>
            </Box>
            <Link href='https://github.com/austbuhl/project-social-front-end'>
              <FaGithub />
            </Link>
          </Box>
          {/* <Link href='https://projectsocial.netlify.app/'>
            Site
            <ExternalLinkIcon mx='2px' />
          </Link> */}
        </Box>
      </section>
    </AnimateSharedLayout>
  )
}
