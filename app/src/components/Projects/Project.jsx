import React from 'react'
import ProjectCard from './ProjectCard'
import anime from "../../assets/anime.jpg"
import brain from "../../assets/brain.jpg"
import heart from "../../assets/heart.jpg"
import "./Project.css"
const Project = () => {
  return (
    <div className='project container'>
        <h2>Projects</h2>
        <div className="project-box">
            <ProjectCard image={anime} title="Anime Recommendation System"/>
            <ProjectCard image={brain} title="Brain Tumor Detection System"/>
            <ProjectCard image={heart} title="Heart Desiese Detection System"/>
        </div>
    </div>
  )
}

export default Project