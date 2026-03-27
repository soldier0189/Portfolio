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
            <ProjectCard image={anime} title="Anime Recommendation System" gitHubLink="https://github.com/soldier0189/Anime_Recommendation_system" liveDemoLink="https://anime-recommendation-system-1-lvrz.onrender.com/"/>
            <ProjectCard image={brain} title="Brain Tumor Detection System" gitHubLink="https://github.com/soldier0189/Brain_Tumor_Detector"/>
            <ProjectCard image={heart} title="Heart Desiese Detection System" gitHubLink="https://github.com/soldier0189/Heart-Desiese-Prediction" liveDemoLink="https://heart-desiese-prediction-1.onrender.com/"/>
        </div>
    </div>
  )
}

export default Project