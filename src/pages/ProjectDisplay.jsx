import React from 'react'
import '../styles/ProjectDisplay.css'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import GithubIcon from "@material-ui/icons/GitHub"
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

//this file will access the specfic project the user want
function ProjectDisplay() {
    const {id} = useParams()
    //allow the program to go to the file
    const project = ProjectList[id]
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} />
            <p><b>Skills: </b>{project.skills}</p>
            <div>
                <a href={project.urlCode} target="_blank" rel="noreferrer"><GithubIcon /></a>
                <a href={project.urlLive} target="_blank" rel="noreferrer"><PlayArrowIcon /> </a>            
            </div>
            
        </div>
    )
}

export default ProjectDisplay