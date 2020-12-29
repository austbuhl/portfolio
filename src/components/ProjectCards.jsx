import React from 'react'
import { motion } from 'framer-motion'
import './ProjectCards.css'
import { NavLink } from 'react-router-dom'
import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  Tooltip
} from '@material-ui/core/'
import { FaReact } from 'react-icons/fa'
import {
  SiPostgresql,
  SiRails,
  SiRedux,
  SiJavascript,
  SiGooglemaps,
  SiMaterialUi,
  SiBootstrap,
  SiRuby,
  SiReactrouter
} from 'react-icons/si'
import GitHubIcon from '@material-ui/icons/GitHub'
import WebIcon from '@material-ui/icons/Web'
import { animationTwo, transition } from '../animations/index'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '35vh',
    width: 'auto',
    maxWidth: 750,
    boxShadow: '10px 10px 10px #0a131f',
    border: '1.25px solid #0a131f',
    borderRadius: 10,
    margin: '2em'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    // width: 300,
    marginRight: '1em'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    flex: '1 0 auto'
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between'
    // paddingLeft: theme.spacing(1),
    // paddingBottom: theme.spacing(1)
  }
}))

const icons = {
  React: <FaReact />,
  Redux: <SiRedux />,
  Javascript: <SiJavascript />,
  Rails: <SiRails />,
  PostgreSQL: <SiPostgresql />,
  'Google Maps API': <SiGooglemaps />,
  'Material UI': <SiMaterialUi />,
  Bootstrap: <SiBootstrap />,
  'Ruby on Rails': <SiRuby />,
  'React Router': <SiReactrouter />
}

export const ProjectCards = ({ projects }) => {
  const classes = useStyles()

  const renderCards = () => {
    return projects.map((project) => (
      <Card key={project.id} className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <NavLink to={`/projects/${project.id}`}>
              <Typography component='h3' variant='h4'>
                {project.name}
              </Typography>
            </NavLink>
            <div>
              <h4>FrontEnd</h4>
              {project.stack.frontend.map((tech) => icons[tech])}
              <h4>Backend</h4>
              {project.stack.backend.map((tech) => icons[tech])}
            </div>
          </CardContent>
          <div className={classes.controls}>
            <Tooltip title='View Source Code' arrow placement='right'>
              <IconButton
                aria-label='view source code'
                target='_blank'
                href={project.frontend}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='View Site' arrow placement='left'>
              <IconButton
                aria-label='view site'
                target='_blank'
                href={project.url}
              >
                <WebIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image={project.images[0].url}
          title={project.images[0].url}
        />
      </Card>
    ))
  }

  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationTwo}
      transition={transition}
      style={{ width: '100%' }}
      className='cards-container'
    >
      <Typography variant='h3'>Projects</Typography>
      {renderCards()}
    </motion.div>
  )
}

// <Card className={classes.root}>
//         <div className={classes.details}>
//           <CardContent className={classes.content}>
//             <NavLink to='/projects/1'>
//               <Typography component='h5' variant='h5'>
//                 ProjectSocial
//               </Typography>
//             </NavLink>
//             <Typography variant='subtitle1' color='textSecondary'>
//               {/* React - Redux - Ruby on Rails */}
//               <h4>FrontEnd</h4>
//               <FaReact />
//               <SiRedux />
//               <SiJavascript />
//               <SiGooglemaps />
//               <SiMaterialUi />
//               <h4>Backend</h4>
//               <SiPostgresql />
//               <SiRails />
//             </Typography>
//           </CardContent>
//           <div className={classes.controls}>
//             <Tooltip title='View Source Code' arrow placement='right'>
//               <IconButton
//                 aria-label='view source code'
//                 target='_blank'
//                 href='https://github.com/austbuhl/project-social-front-end'
//               >
//                 <GitHubIcon />
//               </IconButton>
//             </Tooltip>

//             <Tooltip title='View Site' arrow placement='left'>
//               <IconButton
//                 aria-label='view site'
//                 target='_blank'
//                 href='https://github.com/austbuhl/project-social-front-end'
//               >
//                 <WebIcon />
//               </IconButton>
//             </Tooltip>
//           </div>
//         </div>
//         <CardMedia
//           className={classes.cover}
//           image='/PS/ProjectSocialHome.png'
//           title='Live from space album cover'
//         />
//       </Card>
//       <br />
//       <Card className={classes.root}>
//         <div className={classes.details}>
//           <CardContent className={classes.content}>
//             <Typography component='h5' variant='h5'>
//               ProjectSocial
//             </Typography>
//             <Typography variant='subtitle1' color='textSecondary'>
//               <h4>FrontEnd</h4>
//               <FaReact />
//               <SiRedux />
//               <SiJavascript />
//               <SiGooglemaps />
//               <SiMaterialUi />
//               <h4>Backend</h4>
//               <SiPostgresql />
//               <SiRails />
//             </Typography>
//           </CardContent>
//           <div className={classes.controls}>
//             <Tooltip title='View Source Code' arrow placement='right'>
//               <IconButton
//                 aria-label='view source code'
//                 target='_blank'
//                 href='https://github.com/austbuhl/project-social-front-end'
//               >
//                 <GitHubIcon />
//               </IconButton>
//             </Tooltip>

//             <Tooltip title='View Site' arrow placement='left'>
//               <IconButton
//                 aria-label='view site'
//                 target='_blank'
//                 href='https://github.com/austbuhl/project-social-front-end'
//               >
//                 <WebIcon />
//               </IconButton>
//             </Tooltip>
//           </div>
//         </div>
//         <CardMedia
//           className={classes.cover}
//           image='/PS/ProjectSocialProfile.png'
//           title='Live from space album cover'
//         />
//       </Card>
