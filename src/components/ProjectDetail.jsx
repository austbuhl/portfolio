import React from 'react'
import { Chip, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { FaReact } from 'react-icons/fa'
import {
  SiPostgresql,
  SiRails,
  SiRedux,
  SiJavascript,
  SiGooglemaps,
  SiMaterialUi
} from 'react-icons/si'
import './ProjectDetail.css'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#1b263b',
    color: 'white'
  }
}))

export const ProjectDetail = ({ project }) => {
  const classes = useStyles()
  const renderTechStack = () =>
    project.stack
      .split(',')
      .map((el) => (
        <Chip
          label={el}
          className={classes.root}
          icon={<FaReact style={{ color: 'white' }} />}
        />
      ))

  return (
    <div className='project-detail'>
      <h1>{project.name}</h1>
      <img
        src='/ProjectSocial.png'
        className='project-image'
        alt='PS'
        // style={{ width: 750, height: 500 }}
      />

      <h4>{project.stack}</h4>
      <br />
      <h4>FrontEnd</h4>
      <FaReact style={{ height: '1.5em', width: '1.5em' }} />
      <SiRedux style={{ height: '1.5em', width: '1.5em' }} />
      <SiJavascript style={{ height: '1.5em', width: '1.5em' }} />
      <SiGooglemaps style={{ height: '1.5em', width: '1.5em' }} />
      <SiMaterialUi style={{ height: '1.5em', width: '1.5em' }} />
      <p>Descripton here ladadadadad</p>
      <h4>BackEnd</h4>
      <SiPostgresql style={{ height: '1.5em', width: '1.5em' }} />
      <SiRails style={{ height: '1.5em', width: '1.5em' }} />
      <p>SOme more words over here yaayayayayay</p>
    </div>
  )
}
