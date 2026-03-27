import React from 'react'
import "./ProjectCard.css"
const ProjectCard = (props) => {
  return (
    <div className='project-card'>
        <img src={props.image} alt="Project img" />
        <h5>{props.title}</h5>
        <div className="buttons">
            <button>GitHub</button>
            <button>Live Demo</button>
        </div>
    </div>
  )
}

export default ProjectCard