import React from 'react'
import profilePic from "../../assets/profile_pic3.jpeg"
import experience from "../../assets/experience.png"
import education from "../../assets/education.png"
import "./About.css"
const About = () => {
  return (
    <div className='about container'>
        <h2>About Me</h2>
        <div className="about-box">
            <div className="about-img">
            <img src={profilePic} alt="Profile-pic" />
        </div>
        <div className="about-info">
            <div className="about-more">
                  <div className="education">
                <img src={experience} alt="" />
                <h6>Experience</h6>
                <p>Fresher</p>

            </div>
            <div className="education">
                <img src={education} alt="" />
                <h6>Education</h6>
                <p>BCA Bachelors Degree</p>
                <p>Maharishi Arvind University</p>
                <span>Pursuing</span>
            </div>
            </div>
            
            <p className='me'>Aspiring Data science and Machine Learning Engineer with practical experience in NLP, recommendation systems, and end-to-end ML pipelines. Proficient in Python, FastAPI, and MLOps tools like MLflow and Docker. Currently exploring Generative AI and Agentic\\ AI using LangChain and LangGraph to build intelligent systems.
        </p>
        </div>
        </div>
        
    </div>
  )
}

export default About