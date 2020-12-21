import React from 'react'

export const ProjectDetail = ({ project }) => {
  return (
    <div style={{ marginLeft: '15em' }}>
      <h1>{project.name}</h1>
      <h4>{project.stack}</h4>
    </div>
  )
}
