import React from 'react'
import profilePic from "../../assets/profile-pic2.jpeg"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import { Link } from 'react-scroll'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero container row'>
        <div className="hero-img col-lg-6">
            <img src={profilePic} alt="Profile Picture" />
        </div>
        <div className="greeting col-lg-6">
            <p>Hello I'm</p>
            <h2>Raghvendra Singh</h2>
            <h5>AI / Data Science Intern</h5>
            <div className="button-container">
                <button className='csv-button'>Resume</button>
                <Link className='contact-info' to='contact' smooth={true} duration={500}>Contact Info</Link>
            </div>
            <div className="links-container">
                <a  href="https://github.com/soldier0189"><img className='platform-link'  src={github} alt="github" /></a>
                <a href="https://linkedin.com/in/raghvendra-singh-rathore-55801034b"><img className='platform-link' src={linkedin} alt="Linked-In" /></a>
            </div>
        </div>
    </div>
  )
}

export default Hero