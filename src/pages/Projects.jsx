import React from 'react'
import '../styles/Projects.css'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((props, idx) => {
          return ( <ProjectItem 
              id={idx} 
              key = {idx} 
              name = {props.name} 
              image = {props.image} 
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects